export type ItemCategory = 'equipment' | 'consumable' | 'tool' | 'quest'
export type IconType = 'weapon' | 'spellbook' | 'potion' | 'light' | 'tool' | 'quest' | 'default'
export type MessageRole = 'gm' | 'player'
export type QuestType = 'main' | 'side' | 'completed'

export interface DiceCheck {
  type: string
  result: number
  dc: number
  success: boolean
  note: string
}

export interface ChatMessage {
  role: MessageRole
  text: string
  timestamp: string
  diceCheck?: DiceCheck
}

export interface Objective {
  text: string
  completed: boolean
}

export interface Quest {
  id: string
  title: string
  type: QuestType
  description: string
  objectives: Objective[]
  notes: string
  related: { npcs: string[]; locations: string[]; items: string[] }
  reward: { xp: number; gold: number }
}

export interface InventoryItem {
  name: string
  category: ItemCategory
  description: string
  weight: number
  quantity?: number
  iconType: IconType
}

export const character = {
  name: 'Леголас Громовержец',
  race: 'Эльф',
  class: 'Волшебник',
  level: 1,
  alignment: 'Нейтрально-добрый',
  xp: 0,
  xpNextLevel: 300,
  hp: { current: 8, max: 8 },
  ac: 13,
  speed: 30,
  proficiencyBonus: 2,
  abilities: {
    str: { score: 8, modifier: -1 },
    dex: { score: 16, modifier: 3 },
    con: { score: 14, modifier: 2 },
    int: { score: 15, modifier: 2 },
    wis: { score: 12, modifier: 1 },
    cha: { score: 10, modifier: 0 },
  },
  savingThrows: {
    proficient: ['int', 'wis'],
    values: { str: -1, dex: 3, con: 2, int: 4, wis: 3, cha: 0 } as Record<string, number>,
  },
  skills: [
    { name: 'Атлетика', ability: 'str', value: -1, proficient: false },
    { name: 'Акробатика', ability: 'dex', value: 3, proficient: false },
    { name: 'Ловкость рук', ability: 'dex', value: 3, proficient: false },
    { name: 'Скрытность', ability: 'dex', value: 3, proficient: false },
    { name: 'Выносливость', ability: 'con', value: 2, proficient: false },
    { name: 'Магия', ability: 'int', value: 4, proficient: true },
    { name: 'История', ability: 'int', value: 4, proficient: true },
    { name: 'Расследование', ability: 'int', value: 2, proficient: false },
    { name: 'Природа', ability: 'int', value: 2, proficient: false },
    { name: 'Религия', ability: 'int', value: 2, proficient: false },
    { name: 'Проницательность', ability: 'wis', value: 3, proficient: true },
    { name: 'Медицина', ability: 'wis', value: 1, proficient: false },
    { name: 'Восприятие', ability: 'wis', value: 1, proficient: false },
    { name: 'Выживание', ability: 'wis', value: 1, proficient: false },
    { name: 'Уход за животными', ability: 'wis', value: 1, proficient: false },
    { name: 'Обман', ability: 'cha', value: 0, proficient: false },
    { name: 'Запугивание', ability: 'cha', value: 0, proficient: false },
    { name: 'Выступление', ability: 'cha', value: 0, proficient: false },
    { name: 'Убеждение', ability: 'cha', value: 0, proficient: false },
  ],
  attacks: [
    { name: 'Боевой посох', bonus: 1, description: '1d6-1 дробящий · 1d8-1 двуручно' },
  ],
  resources: [
    { name: 'Магическое Восстановление', current: 1, max: 1, recharge: 'Длинный отдых' },
  ],
  spellcasting: {
    dc: 12,
    attackBonus: 4,
    cantrips: ['Огненный Снаряд', 'Свет', 'Луч Холода'],
    spellSlots: [
      { level: 1, current: 2, max: 2 },
    ],
    spells: [
      { name: 'Обнаружение Магии', level: 1, prepared: true },
      { name: 'Щит', level: 1, prepared: true },
      { name: 'Падение Пёрышком', level: 1, prepared: false },
    ],
  },
  traits: {
    classFeatures: [
      { name: 'Магическое Восстановление', description: 'Один раз в день, во время короткого отдыха, можно восстановить потраченные слоты заклинаний на суммарный уровень не выше половины вашего уровня волшебника (округлённого вверх).' },
      { name: 'Колдовство', description: 'Используете Интеллект как характеристику заклинателя. Сложность спасброска от ваших заклинаний равна 8 + бонус мастерства + модификатор Интеллекта.' },
    ],
    racialTraits: [
      { name: 'Наследие Фей', description: 'Вы совершаете с преимуществом спасброски от очарования, и вас нельзя усыпить магическим путём.' },
      { name: 'Транс', description: 'Вам не нужен полноценный сон. Вместо этого вы медитируете в течение 4 часов в день.' },
    ],
  },
}

export const quests: Quest[] = [
  {
    id: 'quest_001',
    title: 'Пропавший купец Торин',
    type: 'main',
    description: 'Найти пропавшего купца Торина и узнать, что с ним случилось.',
    objectives: [
      { text: 'Расспросить жителей деревни', completed: true },
      { text: 'Исследовать дорогу к шахтам', completed: false },
      { text: 'Найти купца Торина', completed: false },
    ],
    notes: 'Грок знает больше, чем говорит. Он нервничал, когда упомянули Старые шахты.',
    related: { npcs: ['Грок', 'Торин'], locations: ['Старые шахты', 'Деревня Миствейл'], items: ['Медальон Торина'] },
    reward: { xp: 200, gold: 50 },
  },
  {
    id: 'quest_002',
    title: 'Волки в окрестностях',
    type: 'side',
    description: 'Жители жалуются на участившиеся нападения волков на скот.',
    objectives: [
      { text: 'Найти логово волков', completed: false },
      { text: 'Уничтожить или прогнать стаю', completed: false },
      { text: 'Вернуться к старосте', completed: false },
    ],
    notes: 'Волки ведут себя необычно — возможно, под влиянием магии.',
    related: { npcs: ['Бургомистр Эдвин'], locations: ['Лес Туманов'], items: [] },
    reward: { xp: 100, gold: 25 },
  },
  {
    id: 'quest_003',
    title: 'Артефакт из гробницы',
    type: 'completed',
    description: 'Доставить древний артефакт из заброшенной гробницы в библиотеку.',
    objectives: [
      { text: 'Найти гробницу на севере', completed: true },
      { text: 'Получить артефакт', completed: true },
      { text: 'Доставить в библиотеку Мистара', completed: true },
    ],
    notes: 'Выполнено. Маг Мистар был очень доволен находкой.',
    related: { npcs: ['Мистар'], locations: ['Гробница Древних', 'Библиотека Мистара'], items: ['Осколок Вечности'] },
    reward: { xp: 150, gold: 30 },
  },
]

export const inventory = {
  currency: { gold: 15, silver: 7, copper: 4 },
  carryWeight: { current: 32, max: 120 },
  items: [
    { name: 'Боевой посох', category: 'equipment' as ItemCategory, description: '1d6 дробящий · двуручный 1d8', weight: 4, iconType: 'weapon' as IconType },
    { name: 'Мантия волшебника', category: 'equipment' as ItemCategory, description: 'Лёгкая броня · +1 AC при ношении', weight: 3, iconType: 'default' as IconType },
    { name: 'Книга заклинаний', category: 'equipment' as ItemCategory, description: 'Содержит все изученные заклинания', weight: 3, iconType: 'spellbook' as IconType },
    { name: 'Зелье лечения', category: 'consumable' as ItemCategory, description: '2d4+2 HP', weight: 0.5, quantity: 2, iconType: 'potion' as IconType },
    { name: 'Факел', category: 'consumable' as ItemCategory, description: 'Освещает 6 м, горит 1 час', weight: 1, quantity: 5, iconType: 'light' as IconType },
    { name: 'Рацион', category: 'consumable' as ItemCategory, description: 'На один день', weight: 2, quantity: 3, iconType: 'default' as IconType },
    { name: 'Верёвка (15 м)', category: 'tool' as ItemCategory, description: 'Шёлковая верёвка', weight: 5, iconType: 'tool' as IconType },
    { name: 'Набор исследователя', category: 'tool' as ItemCategory, description: 'Крюк, карты, компас', weight: 6, iconType: 'tool' as IconType },
    { name: 'Медальон Торина', category: 'quest' as ItemCategory, description: 'Принадлежало пропавшему купцу', weight: 0.1, iconType: 'quest' as IconType },
  ] satisfies InventoryItem[],
}

export const chatMessages: ChatMessage[] = [
  {
    role: 'gm',
    text: 'Вы стоите у ворот деревни Миствейл. Туман стелется по земле, и где-то вдали слышен вой волков. Трактирщик Грок, стоящий у входа, нервно оглядывается по сторонам.',
    timestamp: '14:23',
  },
  {
    role: 'player',
    text: 'Подхожу к Гроку и спрашиваю о пропавшем купце.',
    timestamp: '14:24',
  },
  {
    role: 'gm',
    text: 'Грок вздрагивает при вашем приближении. "Торин? Да, он был здесь три дня назад... направлялся к старым шахтам на севере. Говорил, что нашёл что-то важное." Он замолкает и отводит взгляд.',
    timestamp: '14:25',
    diceCheck: {
      type: 'Проницательность',
      result: 14,
      dc: 12,
      success: true,
      note: 'Грок явно что-то скрывает',
    },
  },
]

export const quickActions = [
  'Расспросить подробнее',
  'Проверить снаряжение',
  'Отправиться к шахтам',
  'Спросить о вознаграждении',
]
