import './style.css'
import { icon } from './icons'
import { setupInstallPrompt } from './install'
import { renderChat } from './screens/chat'
import { renderCharacter } from './screens/character'
import { renderInventory } from './screens/inventory'
import { renderQuests } from './screens/quests'

const TABS = [
  { id: 'chat',      label: 'Чат',       iconName: 'message-square', render: renderChat },
  { id: 'character', label: 'Персонаж',  iconName: 'user',           render: renderCharacter },
  { id: 'inventory', label: 'Инвентарь', iconName: 'briefcase',      render: renderInventory },
  { id: 'quests',    label: 'Квесты',    iconName: 'file-text',      render: renderQuests },
]

const app = document.querySelector<HTMLDivElement>('#app')!

// Build screens
const screens = TABS.map(tab => {
  const el = tab.render()
  el.classList.add('screen')
  el.dataset.screen = tab.id
  return el
})

// Tab bar
const tabBar = document.createElement('nav')
tabBar.className = 'tab-bar'
tabBar.setAttribute('role', 'tablist')
tabBar.innerHTML = TABS.map((tab, i) => `
  <button class="tab-item${i === 0 ? ' active' : ''}" data-tab="${tab.id}" role="tab" aria-selected="${i === 0}">
    ${icon(tab.iconName, 20)}
    <span>${tab.label}</span>
  </button>
`).join('')

// Activate first screen
screens[0]!.classList.add('active')

// Mount
screens.forEach(s => app.appendChild(s))
app.appendChild(tabBar)

setupInstallPrompt()

// Switch tabs
tabBar.addEventListener('click', (e) => {
  const btn = (e.target as Element).closest('.tab-item') as HTMLElement | null
  if (!btn) return
  const tabId = btn.dataset.tab!

  tabBar.querySelectorAll<HTMLElement>('.tab-item').forEach(b => {
    b.classList.remove('active')
    b.setAttribute('aria-selected', 'false')
  })
  btn.classList.add('active')
  btn.setAttribute('aria-selected', 'true')

  screens.forEach(s => {
    s.classList.toggle('active', s.dataset.screen === tabId)
  })
})
