const DISMISSED_KEY = 'pwa-install-dismissed'

function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true)
  )
}

function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
}

function isAndroid(): boolean {
  return /Android/.test(navigator.userAgent)
}

function createSheet(content: string): HTMLElement {
  const overlay = document.createElement('div')
  overlay.className = 'install-overlay'
  overlay.innerHTML = `
    <div class="install-sheet">
      <div class="install-app-icon">
        <img src="/dnd-ai-mobile/apple-touch-icon-180x180.png" alt="DnD AI" width="64" height="64" />
      </div>
      <div class="install-app-name">DnD AI</div>
      <div class="install-app-desc">AI Game Master для Dungeons&nbsp;&amp;&nbsp;Dragons</div>
      ${content}
      <button class="install-dismiss">Не сейчас</button>
    </div>
  `

  overlay.querySelector('.install-dismiss')!.addEventListener('click', () => {
    localStorage.setItem(DISMISSED_KEY, '1')
    overlay.remove()
  })

  return overlay
}

function showAndroidPrompt(deferredPrompt: Event): void {
  const overlay = createSheet(`
    <button class="install-btn" id="install-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Установить приложение
    </button>
  `)

  document.body.appendChild(overlay)

  overlay.querySelector('#install-btn')!.addEventListener('click', async () => {
    const prompt = deferredPrompt as BeforeInstallPromptEvent
    await prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === 'accepted') {
      localStorage.setItem(DISMISSED_KEY, '1')
    }
    overlay.remove()
  })
}

function showIOSInstructions(): void {
  const overlay = createSheet(`
    <div class="install-ios-steps">
      <div class="install-ios-step">
        <span class="install-ios-num">1</span>
        <span>Нажми
          <svg class="install-ios-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
          в правом углу
        </span>
      </div>
      <div class="install-ios-step">
        <span class="install-ios-num">2</span>
        <span>Нажми
          <svg class="install-ios-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
          «Поделиться»
        </span>
      </div>
      <div class="install-ios-step">
        <span class="install-ios-num">3</span>
        <span>Выбери <strong>«На экран Домой»</strong></span>
      </div>
      <div class="install-ios-step">
        <span class="install-ios-num">4</span>
        <span>Нажми <strong>«Добавить»</strong></span>
      </div>
    </div>
  `)

  document.body.appendChild(overlay)
}

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function setupInstallPrompt(): void {
  if (isStandalone()) return
  if (localStorage.getItem(DISMISSED_KEY)) return

  if (isAndroid()) {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      showAndroidPrompt(e)
    })
    return
  }

  if (isIOS()) {
    // Небольшая задержка чтобы приложение успело отрисоваться
    setTimeout(showIOSInstructions, 800)
  }
}
