import { character } from '../data'
import { icon } from '../icons'

const ABILITY_LABELS: Record<string, string> = {
  str: 'СИЛ', dex: 'ЛОВ', con: 'ВЫН', int: 'ИНТ', wis: 'МДР', cha: 'ХАР',
}
const ABILITY_NAMES: Record<string, string> = {
  str: 'Сила', dex: 'Ловкость', con: 'Выносливость', int: 'Интеллект', wis: 'Мудрость', cha: 'Харизма',
}
const ABILITY_ORDER = ['str', 'dex', 'con', 'int', 'wis', 'cha']

function fmtMod(mod: number): string {
  return mod > 0 ? `+${mod}` : `${mod}`
}

function renderMain(): string {
  const c = character
  const hpPct = (c.hp.current / c.hp.max) * 100
  const hpLow = hpPct < 25
  const xpPct = Math.min(100, Math.round((c.xp / c.xpNextLevel) * 100))

  const metricsHtml = [
    { label: 'HP', value: `${c.hp.current}/${c.hp.max}`, danger: hpLow },
    { label: 'AC', value: `${c.ac}`, danger: false },
    { label: 'Скорость', value: `${c.speed} фт`, danger: false },
    { label: 'Мастерство', value: `+${c.proficiencyBonus}`, danger: false },
  ].map(m => `
    <div class="metric-card">
      <div class="metric-label">${m.label}</div>
      <div class="metric-value${m.danger ? ' metric-danger' : ''}">${m.value}</div>
    </div>
  `).join('')

  const abilitiesHtml = ABILITY_ORDER.map(key => {
    const ab = c.abilities[key as keyof typeof c.abilities]
    const modColor = ab.modifier > 0 ? 'mod-pos' : ab.modifier < 0 ? 'mod-neg' : 'mod-zero'
    return `
      <div class="ability-card">
        <div class="ability-label">${ABILITY_LABELS[key]}</div>
        <div class="ability-score">${ab.score}</div>
        <div class="ability-mod ${modColor}">${fmtMod(ab.modifier)}</div>
      </div>
    `
  }).join('')

  const attacksHtml = c.attacks.map(a => `
    <div class="list-card">
      <div>
        <div class="list-card-name">${a.name}</div>
        <div class="list-card-desc">${a.description}</div>
      </div>
      <div class="list-card-value">${fmtMod(a.bonus)}</div>
    </div>
  `).join('')

  const stAbilities = ABILITY_ORDER
  const stChips = stAbilities.map(key => {
    const isProficient = c.savingThrows.proficient.includes(key)
    const val = c.savingThrows.values[key]
    return `<span class="chip ${isProficient ? 'chip-proficient' : 'chip-normal'}">${ABILITY_LABELS[key]} ${fmtMod(val)}</span>`
  }).join('')

  const resourcesHtml = c.resources.map(r => {
    const dots = Array.from({ length: r.max }, (_, i) =>
      `<span class="resource-dot${i < r.current ? ' resource-dot-used' : ''}"></span>`
    ).join('')
    return `
      <div class="resource-card">
        <div class="resource-header">
          <div class="resource-name">${r.name}</div>
          <div class="resource-count">${r.current}/${r.max}</div>
        </div>
        <div class="resource-dots">${dots}</div>
        <div class="resource-recharge">${r.recharge}</div>
      </div>
    `
  }).join('')

  return `
    <div class="char-header">
      <div class="char-avatar">${icon('user', 24)}</div>
      <div>
        <div class="char-name">${c.name}</div>
        <div class="char-subtitle">${c.race} · ${c.class} · Уровень ${c.level}</div>
        <div class="char-alignment">${c.alignment}</div>
      </div>
    </div>

    <div class="xp-bar-wrap">
      <div class="xp-bar-label">XP: ${c.xp} / ${c.xpNextLevel}</div>
      <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${xpPct}%"></div></div>
    </div>

    <div class="section-label">Метрики</div>
    <div class="metrics-grid">${metricsHtml}</div>

    <div class="section-label">Характеристики</div>
    <div class="abilities-grid">${abilitiesHtml}</div>

    <div class="section-label">Атаки</div>
    <div class="list-cards">${attacksHtml}</div>

    <div class="section-label">Спасброски</div>
    <div class="chips-row">${stChips}</div>

    <div class="section-label">Ресурсы</div>
    <div class="resource-list">${resourcesHtml}</div>
  `
}

function renderSkills(): string {
  const grouped: Record<string, typeof character.skills> = {}
  ABILITY_ORDER.forEach(key => {
    grouped[key] = character.skills.filter(s => s.ability === key)
  })

  return ABILITY_ORDER.map(key => {
    const skills = grouped[key]
    if (!skills || skills.length === 0) return ''
    const rows = skills.map((s, i) => `
      <div class="skill-row${s.proficient ? ' skill-proficient' : ''}${i < skills.length - 1 ? ' skill-divider' : ''}">
        <span class="skill-name">${s.name}</span>
        <span class="skill-value">${fmtMod(s.value)}</span>
      </div>
    `).join('')
    return `
      <div class="skill-group">
        <div class="group-label">${ABILITY_NAMES[key]}</div>
        <div class="skill-list">${rows}</div>
      </div>
    `
  }).join('')
}

function renderMagic(): string {
  const sp = character.spellcasting
  const allSlotsUsed = sp.spellSlots.every(s => s.current === 0)

  const bannerHtml = allSlotsUsed
    ? `<div class="spell-slots-banner">${icon('alert-circle', 16)} Все слоты заклинаний израсходованы. Доступны только кантрипы.</div>`
    : ''

  const cantripsHtml = `
    <div class="section-label">КАНТРИПЫ</div>
    <div class="chips-row">${sp.cantrips.map(c => `<span class="chip chip-normal">${c}</span>`).join('')}</div>
  `

  const spellsByLevel: Record<number, typeof sp.spells> = {}
  sp.spells.forEach(s => {
    if (!spellsByLevel[s.level]) spellsByLevel[s.level] = []
    spellsByLevel[s.level]!.push(s)
  })

  const spellLevelsHtml = sp.spellSlots.map(slot => {
    const dots = Array.from({ length: slot.max }, (_, i) =>
      `<span class="slot-dot${i < slot.current ? ' slot-dot-active' : ''}${allSlotsUsed ? ' slot-dot-empty-danger' : ''}"></span>`
    ).join('')
    const spellList = (spellsByLevel[slot.level] ?? []).map(s => `
      <div class="spell-row${s.prepared ? ' spell-prepared' : ''}${allSlotsUsed && !s.prepared ? ' spell-disabled' : ''}">
        <span class="spell-name">${s.name}</span>
        <span class="spell-status">${allSlotsUsed && !s.prepared ? 'нет слотов' : s.prepared ? 'подготовлено' : 'в книге'}</span>
      </div>
    `).join('')
    return `
      <div class="spell-level-section">
        <div class="spell-level-header">
          <span class="spell-level-label">${slot.level} УРОВЕНЬ</span>
          <div class="slot-dots">
            ${dots}
            <span class="slot-count${allSlotsUsed ? ' slot-count-danger' : ''}">${slot.current}/${slot.max}</span>
          </div>
        </div>
        <div class="spell-list">${spellList}</div>
      </div>
    `
  }).join('')

  return `
    ${bannerHtml}
    <div class="spellcaster-header">
      <div class="spellcaster-stat">
        <div class="spellcaster-stat-value">${sp.dc}</div>
        <div class="spellcaster-stat-label">Сложность</div>
      </div>
      <div class="spellcaster-divider"></div>
      <div class="spellcaster-stat">
        <div class="spellcaster-stat-value">${fmtMod(sp.attackBonus)}</div>
        <div class="spellcaster-stat-label">Бонус атаки</div>
      </div>
    </div>
    ${cantripsHtml}
    ${spellLevelsHtml}
  `
}

function renderTraits(): string {
  const t = character.traits

  function featureCards(features: { name: string; description: string }[]): string {
    return features.map(f => `
      <div class="trait-card">
        <div class="trait-name">${f.name}</div>
        <div class="trait-desc">${f.description}</div>
      </div>
    `).join('')
  }

  return `
    <div class="group-label">Классовые способности</div>
    ${featureCards(t.classFeatures)}
    <div class="group-label" style="margin-top:12px">Расовые особенности</div>
    ${featureCards(t.racialTraits)}
  `
}

const TAB_RENDERERS = [
  { id: 'main', label: 'Основное', render: renderMain },
  { id: 'skills', label: 'Навыки', render: renderSkills },
  { id: 'magic', label: 'Магия', render: renderMagic },
  { id: 'traits', label: 'Черты', render: renderTraits },
]

export function renderCharacter(): HTMLElement {
  const screen = document.createElement('div')
  screen.innerHTML = `
    <header class="screen-header">
      <span class="screen-title">Персонаж</span>
      <button class="icon-btn">${icon('edit', 20)}</button>
    </header>
    <div class="inner-tabs-header" id="inner-tabs-header">
      ${TAB_RENDERERS.map((t, i) =>
        `<button class="inner-tab${i === 0 ? ' active' : ''}" data-tab="${t.id}">${t.label}</button>`
      ).join('')}
    </div>
    <div class="screen-content" id="char-content">
      ${TAB_RENDERERS[0]!.render()}
    </div>
  `

  const tabsHeader = screen.querySelector<HTMLElement>('#inner-tabs-header')!
  const content = screen.querySelector<HTMLElement>('#char-content')!

  tabsHeader.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest('.inner-tab') as HTMLElement | null
    if (!btn) return
    const tabId = btn.dataset.tab!
    const renderer = TAB_RENDERERS.find(t => t.id === tabId)
    if (!renderer) return

    tabsHeader.querySelectorAll('.inner-tab').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    content.innerHTML = renderer.render()
    content.scrollTop = 0
  })

  return screen
}
