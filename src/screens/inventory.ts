import { inventory } from '../data'
import type { InventoryItem, IconType } from '../data'
import { icon } from '../icons'

const ICON_COLORS: Record<IconType, { bg: string; stroke: string; svgIcon: string }> = {
  weapon:    { bg: 'var(--accent-bg)',   stroke: 'var(--accent)',      svgIcon: 'briefcase' },
  spellbook: { bg: 'var(--purple-bg)',   stroke: 'var(--purple-stroke)', svgIcon: 'file-text' },
  potion:    { bg: 'var(--danger-bg)',   stroke: '#A32D2D',            svgIcon: 'plus-circle' },
  light:     { bg: 'var(--warning-bg)',  stroke: '#854F0B',            svgIcon: 'star' },
  tool:      { bg: 'var(--success-bg)',  stroke: '#0F6E56',            svgIcon: 'edit' },
  quest:     { bg: 'var(--pink-bg)',     stroke: 'var(--pink-text)',   svgIcon: 'map-pin' },
  default:   { bg: 'var(--bg-secondary)', stroke: 'var(--text-secondary)', svgIcon: 'briefcase' },
}

function renderItemRow(item: InventoryItem): string {
  const colors = ICON_COLORS[item.iconType]
  const iconHtml = `<div class="item-icon" style="background:${colors.bg};color:${colors.stroke}">${icon(colors.svgIcon, 18)}</div>`
  const right = item.quantity !== undefined
    ? `<span class="item-qty">×${item.quantity}</span>`
    : `<span class="item-weight">${item.weight} фунт</span>`

  const arrowHtml = item.category === 'quest'
    ? `<span class="item-arrow">${icon('chevron-right', 16)}</span>`
    : ''

  return `
    <div class="item-row">
      ${iconHtml}
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.description}</div>
      </div>
      <div class="item-meta">${right}${arrowHtml}</div>
    </div>
  `
}

export function renderInventory(): HTMLElement {
  const inv = inventory
  const { currency, carryWeight, items } = inv

  const weightPct = Math.min(100, Math.round((carryWeight.current / carryWeight.max) * 100))
  const weightColor = weightPct > 75 ? 'var(--danger)' : weightPct > 50 ? 'var(--warning)' : 'var(--success)'

  const equipment = items.filter(i => i.category === 'equipment')
  const consumables = items.filter(i => i.category === 'consumable')
  const tools = items.filter(i => i.category === 'tool')
  const questItems = items.filter(i => i.category === 'quest')

  function section(title: string, sectionItems: InventoryItem[]): string {
    if (sectionItems.length === 0) return ''
    return `
      <div class="inv-section">
        <div class="inv-section-title">${title}</div>
        <div class="inv-item-list">
          ${sectionItems.map(renderItemRow).join('')}
        </div>
      </div>
    `
  }

  const screen = document.createElement('div')
  screen.innerHTML = `
    <header class="screen-header">
      <span class="screen-title">Инвентарь</span>
      <button class="icon-btn">${icon('edit', 20)}</button>
    </header>
    <div class="screen-content">
      <div class="inv-summary-grid">
        <div class="summary-card">
          <div class="summary-label">КОШЕЛЁК</div>
          <div class="wallet-gold">${currency.gold} зм</div>
          <div class="wallet-rest">${currency.silver} см · ${currency.copper} мм</div>
        </div>
        <div class="summary-card">
          <div class="summary-label">НАГРУЗКА</div>
          <div class="weight-value">${carryWeight.current} / ${carryWeight.max} фунт</div>
          <div class="weight-track">
            <div class="weight-fill" style="width:${weightPct}%;background:${weightColor}"></div>
          </div>
        </div>
      </div>

      ${section('Экипировка', equipment)}
      ${section('Расходники', consumables)}
      ${section('Инструменты и прочее', tools)}
      ${section('Квестовые предметы', questItems)}
    </div>
  `

  return screen
}
