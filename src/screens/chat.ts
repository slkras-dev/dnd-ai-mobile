import { chatMessages, quickActions } from '../data'
import type { ChatMessage } from '../data'
import { icon } from '../icons'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderMessage(msg: ChatMessage): string {
  const isGm = msg.role === 'gm'

  const diceHtml = msg.diceCheck
    ? `<div class="dice-check">
        <div class="dice-check-label">ПРОВЕРКА</div>
        <div class="dice-check-result">
          <span class="dice-type">${escapeHtml(msg.diceCheck.type)}</span>
          —
          <span class="dice-number">${msg.diceCheck.result}</span>
          (DC ${msg.diceCheck.dc})
          —
          <span class="${msg.diceCheck.success ? 'dice-success' : 'dice-fail'}">${msg.diceCheck.success ? 'Успех' : 'Провал'}</span>
        </div>
        <div class="dice-note">${escapeHtml(msg.diceCheck.note)}</div>
      </div>`
    : ''

  return `<div class="message message-${isGm ? 'gm' : 'player'}">
    <div class="message-bubble">
      <div class="message-text">${escapeHtml(msg.text)}</div>
      ${diceHtml}
      <div class="message-time">${msg.timestamp}</div>
    </div>
  </div>`
}

export function renderChat(): HTMLElement {
  const messages = [...chatMessages]

  const screen = document.createElement('div')
  screen.innerHTML = `
    <header class="screen-header">
      <div class="chat-gm-info">
        <div class="gm-avatar">${icon('layers', 18)}</div>
        <div>
          <div class="gm-name">Game Master</div>
          <div class="gm-campaign">Кампания: Туманные горы</div>
        </div>
      </div>
      <button class="icon-btn">${icon('more-vertical', 20)}</button>
    </header>

    <div class="messages-area" id="messages-area">
      <div class="messages-list" id="messages-list">
        ${messages.map(renderMessage).join('')}
      </div>
      <div class="quick-actions" id="quick-actions">
        ${quickActions.map(a => `<button class="chip chip-action">${escapeHtml(a)}</button>`).join('')}
      </div>
    </div>

    <div class="chat-input-area">
      <div class="chat-input-inner">
        <input
          class="chat-input"
          type="text"
          placeholder="Что делаешь?"
          id="chat-input"
          autocomplete="off"
        />
        <button class="send-btn" id="send-btn" aria-label="Отправить">
          ${icon('send', 16)}
        </button>
      </div>
    </div>
  `

  const messagesList = screen.querySelector<HTMLElement>('#messages-list')!
  const quickActionsEl = screen.querySelector<HTMLElement>('#quick-actions')!
  const messagesArea = screen.querySelector<HTMLElement>('#messages-area')!
  const input = screen.querySelector<HTMLInputElement>('#chat-input')!
  const sendBtn = screen.querySelector<HTMLButtonElement>('#send-btn')!

  function scrollToBottom() {
    requestAnimationFrame(() => {
      messagesArea.scrollTop = messagesArea.scrollHeight
    })
  }

  function addPlayerMessage(text: string) {
    const now = new Date()
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
    const msg: ChatMessage = { role: 'player', text, timestamp: time }
    messages.push(msg)

    const div = document.createElement('div')
    div.innerHTML = renderMessage(msg)
    messagesList.appendChild(div.firstElementChild!)

    quickActionsEl.style.display = 'none'
    scrollToBottom()
  }

  sendBtn.addEventListener('click', () => {
    const text = input.value.trim()
    if (!text) return
    input.value = ''
    addPlayerMessage(text)
  })

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const text = input.value.trim()
      if (!text) return
      input.value = ''
      addPlayerMessage(text)
    }
  })

  quickActionsEl.addEventListener('click', (e) => {
    const chip = (e.target as Element).closest('.chip-action') as HTMLElement | null
    if (!chip) return
    addPlayerMessage(chip.textContent ?? '')
  })

  scrollToBottom()

  return screen
}
