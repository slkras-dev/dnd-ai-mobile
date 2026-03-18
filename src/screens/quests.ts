import { quests } from '../data'
import type { Quest, QuestType } from '../data'
import { icon } from '../icons'

type Filter = 'all' | 'active' | 'completed'

const QUEST_STYLE: Record<QuestType, { iconBg: string; iconColor: string; iconName: string; badgeBg: string; badgeText: string; badgeLabel: string }> = {
  main:      { iconBg: 'var(--pink-bg)',  iconColor: 'var(--pink-text)',   iconName: 'star',        badgeBg: 'var(--pink-bg)',  badgeText: 'var(--pink-text)',  badgeLabel: 'Основной' },
  side:      { iconBg: 'var(--accent-bg)', iconColor: 'var(--accent)',     iconName: 'plus-circle', badgeBg: 'var(--accent-bg)', badgeText: 'var(--accent-text)', badgeLabel: 'Побочный' },
  completed: { iconBg: 'var(--green-bg)', iconColor: 'var(--green-text)', iconName: 'check',       badgeBg: 'var(--green-bg)', badgeText: 'var(--green-text)', badgeLabel: 'Завершён' },
}

function renderQuestCard(quest: Quest): string {
  const style = QUEST_STYLE[quest.type]
  const isCompleted = quest.type === 'completed'
  const done = quest.objectives.filter(o => o.completed).length

  const objectivesHtml = quest.objectives.map(o => `
    <div class="objective-row">
      <span class="objective-marker${o.completed ? ' objective-done' : ''}">
        ${o.completed ? icon('check', 12) : ''}
      </span>
      <span class="objective-text${o.completed ? ' objective-text-done' : ''}">${o.text}</span>
    </div>
  `).join('')

  const notesHtml = quest.notes
    ? `<div class="quest-notes">
        <div class="quest-notes-label">ЗАМЕТКИ</div>
        <div class="quest-notes-text">${quest.notes}</div>
      </div>`
    : ''

  const relatedTags: string[] = []
  quest.related.npcs.forEach(n => relatedTags.push(
    `<span class="related-tag">${icon('user', 12)} ${n}</span>`
  ))
  quest.related.locations.forEach(l => relatedTags.push(
    `<span class="related-tag">${icon('map-pin', 12)} ${l}</span>`
  ))
  quest.related.items.forEach(it => relatedTags.push(
    `<span class="related-tag">${icon('briefcase', 12)} ${it}</span>`
  ))
  if (quest.reward.xp > 0 || quest.reward.gold > 0) {
    relatedTags.push(
      `<span class="related-tag related-tag-reward">${icon('gift', 12)} ${quest.reward.xp} XP · ${quest.reward.gold} зм</span>`
    )
  }

  const tagsHtml = relatedTags.length > 0
    ? `<div class="quest-tags">${relatedTags.join('')}</div>`
    : ''

  return `
    <div class="quest-card${isCompleted ? ' quest-card-completed' : ''}" data-quest-id="${quest.id}">
      <div class="quest-header" data-expand-trigger>
        <div class="quest-header-left">
          <div class="quest-icon" style="background:${style.iconBg};color:${style.iconColor}">${icon(style.iconName, 16)}</div>
          <div class="quest-header-info">
            <div class="quest-meta-row">
              <span class="quest-badge" style="background:${style.badgeBg};color:${style.badgeText}">${style.badgeLabel}</span>
              <span class="quest-progress">${done}/${quest.objectives.length}</span>
            </div>
            <div class="quest-title">${quest.title}</div>
            <div class="quest-desc">${quest.description}</div>
          </div>
        </div>
        <div class="quest-chevron">${icon('chevron-right', 18)}</div>
      </div>
      <div class="quest-body" hidden>
        <div class="quest-objectives">${objectivesHtml}</div>
        ${notesHtml}
        ${tagsHtml}
      </div>
    </div>
  `
}

export function renderQuests(): HTMLElement {
  let activeFilter: Filter = 'all'

  const screen = document.createElement('div')
  screen.innerHTML = `
    <header class="screen-header">
      <span class="screen-title">Журнал квестов</span>
      <div class="filter-chips" id="filter-chips">
        <button class="chip chip-filter active" data-filter="all">Все</button>
        <button class="chip chip-filter" data-filter="active">Активные</button>
        <button class="chip chip-filter" data-filter="completed">Завершённые</button>
      </div>
    </header>
    <div class="screen-content" id="quests-list">
      ${quests.map(renderQuestCard).join('')}
    </div>
  `

  const filterChips = screen.querySelector<HTMLElement>('#filter-chips')!
  const questsList = screen.querySelector<HTMLElement>('#quests-list')!

  function applyFilter() {
    const cards = questsList.querySelectorAll<HTMLElement>('.quest-card')
    cards.forEach(card => {
      const qId = card.dataset.questId
      const quest = quests.find(q => q.id === qId)
      if (!quest) return
      const isCompleted = quest.type === 'completed'
      const show = activeFilter === 'all'
        || (activeFilter === 'active' && !isCompleted)
        || (activeFilter === 'completed' && isCompleted)
      card.style.display = show ? '' : 'none'
    })
  }

  filterChips.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest('.chip-filter') as HTMLElement | null
    if (!btn) return
    activeFilter = (btn.dataset.filter as Filter) ?? 'all'
    filterChips.querySelectorAll('.chip-filter').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    applyFilter()
  })

  questsList.addEventListener('click', (e) => {
    const trigger = (e.target as Element).closest('[data-expand-trigger]') as HTMLElement | null
    if (!trigger) return
    const card = trigger.closest('.quest-card') as HTMLElement | null
    if (!card) return
    const body = card.querySelector<HTMLElement>('.quest-body')
    const chevron = card.querySelector<HTMLElement>('.quest-chevron')
    if (!body || !chevron) return

    const isOpen = !body.hidden
    body.hidden = isOpen
    chevron.classList.toggle('quest-chevron-open', !isOpen)
  })

  return screen
}
