# DnD AI Mobile — Дизайн-спецификация для PWA

## Общее описание

PWA-приложение для игры в DnD с ИИ Game Master. Четыре основных экрана, переключаемых через нижнюю навигацию (tab bar). Мобильный-first дизайн, светлая минималистичная тема.

---

## Дизайн-токены

### Цвета

```css
/* Основные */
--bg-primary: #FFFFFF;         /* фон карточек, основной фон */
--bg-secondary: #F5F5F0;      /* фон метрик, секций */
--text-primary: #1A1A1A;      /* основной текст */
--text-secondary: #6B6B6B;    /* вторичный текст, описания */
--text-tertiary: #9B9B9B;     /* подсказки, метки, timestamps */
--border-light: rgba(0,0,0,0.15);  /* разделители, границы */

/* Акцент (синий) */
--accent: #185FA5;             /* активные иконки, кнопки, ссылки */
--accent-bg: #E6F1FB;          /* фон подготовленных заклинаний, профильных навыков */
--accent-text: #0C447C;        /* текст на accent-bg */

/* Статусы */
--danger: #E24B4A;             /* низкое HP, исчерпанные слоты */
--danger-bg: #FCEBEB;
--success: #1D9E75;            /* выполненные цели, полоса нагрузки */
--success-bg: #E1F5EE;
--warning: #BA7517;            /* золото, награды */
--warning-bg: #FAEEDA;

/* Категорийные (для иконок инвентаря, квестов) */
--purple-bg: #EEEDFE;
--purple-stroke: #534AB7;
--pink-bg: #FBEAF0;
--pink-text: #993556;
--green-bg: #EAF3DE;
--green-text: #3B6D11;
```

### Типографика

```css
--font-family: system-ui, -apple-system, sans-serif;
--font-size-xs: 11px;    /* метки, timestamps, uppercase-заголовки секций */
--font-size-sm: 12px;    /* чипсы, подписи, вес предметов */
--font-size-base: 13px;  /* описания, заметки, фильтры */
--font-size-md: 14px;    /* текст в списках, сообщения в чате */
--font-size-lg: 15px;    /* названия квестов, имя NPC */
--font-size-xl: 17px;    /* заголовки экранов, имя персонажа */
--font-size-metric: 20px; /* числа в метриках (HP, AC, характеристики) */
--font-weight-normal: 400;
--font-weight-medium: 500;
```

### Скругления

```css
--radius-sm: 4px;    /* мелкие элементы */
--radius-md: 8px;    /* карточки характеристик, инпуты */
--radius-lg: 12px;   /* карточки квестов, основные контейнеры */
--radius-xl: 16px;   /* фрейм устройства */
--radius-pill: 20px; /* чипсы, кнопки быстрых действий, фильтры */
--radius-circle: 50%; /* аватары, иконки, слот-индикаторы */
```

### Отступы

```css
--spacing-xs: 4px;
--spacing-sm: 6px;
--spacing-md: 8px;
--spacing-base: 10px;
--spacing-lg: 12px;
--spacing-xl: 14px;
--spacing-2xl: 16px;
```

---

## Структура навигации

### Нижний tab bar (всегда видим)

| Таб       | Иконка           | Путь          |
|-----------|------------------|---------------|
| Чат       | message-square   | /chat         |
| Персонаж  | user             | /character    |
| Инвентарь | briefcase        | /inventory    |
| Квесты    | file-text        | /quests       |

- Активный таб: иконка и текст цвета `--accent`
- Неактивный: иконка и текст цвета `--text-tertiary`
- Размер иконок: 20×20px, размер текста: 11px
- Padding: 8px сверху, 12px снизу
- Разделитель сверху: `0.5px solid --border-light`

---

## Экран 1: Чат с ГМ (`/chat`)

### Хедер

- Слева: аватар ГМ (36px круг, синий фон, иконка layers), название "Game master", подпись с названием кампании
- Справа: иконка меню (three dots vertical)

### Область сообщений

**Сообщение ГМ (входящее):**
- Выравнивание: слева
- Max-width: 85%
- Фон: `--bg-secondary`
- Скругления: 16px 16px 16px 4px (хвостик слева внизу)
- Padding: 10px 14px
- Текст: `--font-size-md`, `--text-primary`
- Timestamp: `--font-size-xs`, `--text-tertiary`, выравнивание справа

**Сообщение игрока (исходящее):**
- Выравнивание: справа
- Max-width: 80%
- Фон: `--accent-bg`
- Текст: `--accent-text`
- Скругления: 16px 16px 4px 16px (хвостик справа внизу)

**Блок проверки (dice check) — внутри сообщения ГМ:**
- Контейнер: фон `--bg-primary`, border `--border-light`, radius `--radius-md`
- Заголовок: "ПРОВЕРКА" uppercase, `--font-size-xs`, `--text-tertiary`
- Результат: "[Тип] — [число] (DC [число]) — [успех/провал]"
- Число результата: цвет `--accent`, font-weight 500
- Подпись: `--font-size-sm`, `--text-secondary`

**Быстрые действия (suggestion chips):**
- Располагаются под последним сообщением ГМ
- Horizontal wrap, gap: 8px
- Каждый чип: padding 8px 14px, radius `--radius-pill`, border `--border-light` (чуть жирнее, secondary), фон `--bg-primary`
- Текст: `--font-size-base`, `--text-primary`
- При тапе: отправляет текст как сообщение игрока

### Поле ввода

- Контейнер: border-top `--border-light`
- Слева: иконка (опционально)
- Поле: radius `--radius-pill`, border `--border-light`, placeholder "Что делаешь?"
- Справа: кнопка отправки (36px круг, фон `--accent-bg`, иконка send цвета `--accent`)

---

## Экран 2: Персонаж (`/character`)

### Хедер

- Заголовок "Персонаж" (17px, medium)
- Справа: иконка редактирования (edit/pencil)

### Внутренние табы (горизонтальные, под хедером)

| Таб      | Содержимое                                     |
|----------|------------------------------------------------|
| Основное | Шапка, XP, метрики, характеристики, атаки, спасброски, ресурсы |
| Навыки   | Полный список навыков по характеристикам        |
| Магия    | Spell DC/Attack, кантрипы, заклинания по уровням |
| Черты    | Классовые способности, расовые особенности       |

Активный таб: текст `--accent`, border-bottom 2px `--accent`.
Неактивный: текст `--text-secondary`, border-bottom transparent.

### Таб "Основное"

**Шапка персонажа:**
- Аватар: 48px круг, фон `--accent-bg`, иконка user
- Имя: 17px medium
- Подпись: "Раса · Класс · Уровень N" — 13px, `--text-secondary`
- Мировоззрение: 12px, `--text-tertiary`

**XP-бар:**
- Контейнер: фон `--bg-secondary`, radius `--radius-md`
- Текст: "XP: [текущие] / [до уровня]" — 12px
- Полоса: высота 4px, фон `--border-light`, заполнение `--accent`

**Метрики (grid 4 колонки):**
- HP, AC, Скорость, Бонус мастерства
- Каждая: фон `--bg-secondary`, radius `--radius-md`, padding 8px
- Метка: 11px uppercase `--text-tertiary`
- Значение: 20px medium `--text-primary`
- HP показывает текущие/максимум. Если HP < 25% от максимума — цвет `--danger`

**Характеристики (grid 3×2):**
- СИЛ, ЛОВ, ВЫН, ИНТ, МДР, ХАР
- Каждая: border `--border-light`, radius `--radius-md`, padding 8px, text-align center
- Аббревиатура: 11px `--text-tertiary`
- Значение: 18px medium
- Модификатор: 12px; положительный — `--accent`, отрицательный — `--danger`, нулевой — `--text-secondary`

**Атаки:**
- Заголовок секции: "Атака" 13px medium `--text-secondary`
- Карточки: border `--border-light`, radius `--radius-md`, padding 10px 12px
- Название: 14px `--text-primary`
- Описание: 12px `--text-secondary` (урон, тип)
- Бонус справа: 13px medium `--accent`

**Спасброски:**
- Чипсы в строку с переносом (flex-wrap)
- Профильные: фон `--accent-bg`, текст `--accent-text`
- Непрофильные: border `--border-light`, текст `--text-secondary`

**Ресурсы (классовые):**
- Карточки с фоном `--bg-secondary`, radius `--radius-md`
- Название ресурса: 14px `--text-primary`
- Счётчик: "N/M" 13px `--text-tertiary`
- Визуализация: кружочки 20px
  - Доступный: заливка `--accent`
  - Потраченный: пустой, border 1.5px `--border-light`
- Подходит для любых классовых ресурсов: ци, Channel Divinity, Rage, Wild Shape, Sorcery Points и т.д.

### Таб "Навыки"

- Группировка по характеристике (СИЛ, ЛОВ, ВЫН, ИНТ, МДР, ХАР)
- Заголовок группы: 12px uppercase `--text-tertiary`, letter-spacing 0.5px
- Список: единый контейнер с border, radius `--radius-md`
- Каждый навык: padding 9px 12px, flex space-between
- Разделители между навыками: border-bottom `--border-light`
- Профильные навыки: фон `--accent-bg`, текст `--accent-text`, font-weight 500
- Обычные: текст `--text-primary`, значение `--text-secondary`

### Таб "Магия"

**Шапка заклинателя:**
- Фон `--bg-secondary`, radius `--radius-md`
- Два параметра через разделитель: Сложность (Spell Save DC) и Атака (Spell Attack Bonus)
- Значения: 18px medium

**Кантрипы:**
- Заголовок: "КАНТРИПЫ" uppercase
- Чипсы: radius `--radius-pill`, border `--border-light`, 13px

**Заклинания по уровням:**
Для каждого уровня (1-й, 2-й, 3-й...):
- Заголовок слева: "N УРОВЕНЬ" uppercase
- Слот-индикаторы справа: кружочки 10px
  - Доступный: заливка `--accent`
  - Потраченный: пустой, border 1.5px
  - Счётчик: "N/M" 11px
- Список заклинаний:
  - Подготовленное: фон `--accent-bg`, текст `--accent-text` medium, справа "подготовлено"
  - Не подготовленное (в книге): border `--border-light`, текст `--text-primary`, справа "в книге" `--text-tertiary`

**Состояние "все слоты потрачены":**
- Баннер сверху: фон `--danger-bg`, иконка alert, текст `--danger`
- Текст: "Все слоты заклинаний израсходованы. Доступны только кантрипы."
- Кантрипы остаются активными
- Заклинания: opacity 0.5, справа "нет слотов"
- Счётчики слотов: текст `--danger`

### Таб "Черты"

- Группировка: "Классовые способности", "Расовые особенности"
- Заголовки групп: 12px uppercase `--text-tertiary`
- Карточки: border `--border-light`, radius `--radius-md`, padding 10px 12px
- Название: 14px medium `--text-primary`
- Описание: 13px `--text-secondary`, line-height 1.4

---

## Экран 3: Инвентарь (`/inventory`)

### Хедер

- Заголовок "Инвентарь"
- Справа: иконка редактирования

### Кошелёк и нагрузка (grid 2 колонки)

**Кошелёк:**
- Фон `--bg-secondary`, radius `--radius-md`
- Метка: "КОШЕЛЁК" uppercase 11px
- Значения: золотые монеты (16px medium, цвет `--warning`), серебро и медь (13px `--text-secondary`)

**Нагрузка:**
- Фон `--bg-secondary`, radius `--radius-md`
- Метка: "НАГРУЗКА" uppercase 11px
- Значение: "N / M фунтов" (16px medium)
- Полоса прогресса: высота 4px
  - < 50%: `--success`
  - 50-75%: `--warning`
  - \> 75%: `--danger`

### Категории предметов

Четыре секции, каждая с заголовком (13px medium `--text-secondary`):

**1. Экипировка** — надетое/в руках
**2. Расходники** — зелья, факелы, рационы (справа: количество "×N")
**3. Инструменты и прочее** — верёвка, рюкзак, наборы
**4. Квестовые предметы** — связаны с квестами, со стрелкой навигации

**Общий паттерн строки предмета:**
- Иконка: 36×36px, radius `--radius-md`, цветной фон по категории
- Название: 14px `--text-primary`
- Описание: 12px `--text-secondary`
- Справа: вес (12px `--text-tertiary`) или количество (13px medium `--text-primary`)

**Цветовая кодировка иконок:**
| Категория | Фон иконки | Цвет обводки |
|-----------|-----------|--------------|
| Оружие    | `--accent-bg` (#E6F1FB) | `--accent` (#185FA5) |
| Магические книги | `--purple-bg` (#EEEDFE) | `--purple-stroke` (#534AB7) |
| Зелья     | `--danger-bg` (#FCEBEB) | #A32D2D |
| Свет (факелы) | `--warning-bg` (#FAEEDA) | #854F0B |
| Инструменты | `--success-bg` (#E1F5EE) | #0F6E56 |
| Квестовые | `--pink-bg` (#FBEAF0) | `--pink-text` (#993556) |
| Обычные   | `--bg-secondary` | `--text-secondary` |

---

## Экран 4: Журнал квестов (`/quests`)

### Хедер

- Заголовок "Журнал квестов"
- Справа: фильтры-чипсы: Все | Активные | Завершённые
- Активный фильтр: фон `--accent-bg`, текст `--accent-text`
- Неактивный: border `--border-light`, текст `--text-secondary`

### Карточки квестов

**Типы квестов:**
| Тип       | Иконка круг фон | Иконка     | Бейдж фон    | Бейдж текст |
|-----------|-----------------|------------|--------------|-------------|
| Основной  | `--pink-bg`     | star       | `--pink-bg`  | `--pink-text` |
| Побочный  | `--accent-bg`   | plus-circle| `--accent-bg`| `--accent-text` |
| Завершённый | `--green-bg`  | check      | `--green-bg` | `--green-text` |

**Структура карточки:**
- Контейнер: border `--border-light`, radius `--radius-lg`
- Кликабельный хедер (expand/collapse):
  - Иконка типа: 32px круг
  - Бейдж типа: font-size 11px, radius 10px, padding 2px 8px
  - Название: 15px medium
  - Краткое описание: 13px `--text-secondary`
  - Chevron справа: поворот 90° при раскрытии

**Раскрытое содержимое (отступ 56px слева):**
- Чеклист целей:
  - Выполненная: зелёная галочка, текст зачёркнут, `--text-secondary`
  - Невыполненная: пустой кружок (border `--border-light`), текст `--text-primary`
  - Счётная цель: "Описание (N/M)"
- Блок заметок: фон `--bg-secondary`, radius `--radius-md`
  - Метка "ЗАМЕТКИ" uppercase 11px
  - Текст: 13px `--text-secondary`
- Теги (связанные сущности): flex wrap, gap 8px
  - Каждый тег: иконка 12px + текст 12px `--text-tertiary`
  - Типы: NPC (user icon), Локация (map-pin), Предмет (briefcase)
  - Награда: текст `--warning`, иконка `--warning`

**Завершённые квесты:**
- Opacity: 0.6 на всей карточке
- Все цели зачёркнуты

---

## Взаимодействия и анимации

### Переходы между табами
- Нижний tab bar: мгновенное переключение, без анимации
- Внутренние табы (персонаж): мгновенное переключение

### Чат
- Новые сообщения: появляются снизу, auto-scroll
- Быстрые действия: исчезают после выбора, отправляется как сообщение

### Квесты
- Expand/collapse: transition 0.2s на chevron rotation
- Тело карточки: toggle display flex/none

### Общее
- Кнопки/чипсы: subtle active state (scale 0.98 или background change)
- Списки: никаких pull-to-refresh или swipe actions в MVP

---

## Модель данных (API → UI маппинг)

### Персонаж
```json
{
  "name": "Леголас Громовержец",
  "race": "Эльф",
  "class": "Волшебник",
  "level": 1,
  "alignment": "Нейтрально-добрый",
  "xp": 0,
  "xp_next_level": 300,
  "hp": { "current": 8, "max": 8 },
  "ac": 13,
  "speed": 30,
  "proficiency_bonus": 2,
  "abilities": {
    "str": { "score": 8, "modifier": -1 },
    "dex": { "score": 16, "modifier": 3 },
    "con": { "score": 14, "modifier": 2 },
    "int": { "score": 15, "modifier": 2 },
    "wis": { "score": 12, "modifier": 1 },
    "cha": { "score": 10, "modifier": 0 }
  },
  "saving_throws": {
    "proficient": ["int", "wis"],
    "values": { "str": -1, "dex": 3, "con": 2, "int": 4, "wis": 3, "cha": 0 }
  },
  "skills": [
    { "name": "Магия", "ability": "int", "value": 4, "proficient": true },
    { "name": "Проницательность", "ability": "wis", "value": 3, "proficient": true }
  ],
  "attacks": [
    { "name": "Боевой посох", "bonus": 1, "damage": "1d6-1 дробящий", "note": "1d8-1 двуручно" }
  ],
  "resources": [
    { "name": "Магическое Восстановление", "current": 1, "max": 1, "recharge": "long_rest" }
  ],
  "spellcasting": {
    "dc": 12,
    "attack_bonus": 4,
    "cantrips": ["Огненный Снаряд", "Свет", "Луч Холода"],
    "spell_slots": [
      { "level": 1, "current": 2, "max": 2 }
    ],
    "spells": [
      { "name": "Обнаружение Магии", "level": 1, "prepared": true },
      { "name": "Щит", "level": 1, "prepared": true },
      { "name": "Падение Пёрышком", "level": 1, "prepared": false }
    ]
  },
  "traits": {
    "class_features": [
      { "name": "Магическое Восстановление", "description": "..." },
      { "name": "Колдовство", "description": "..." }
    ],
    "racial_traits": [
      { "name": "Наследие Фей", "description": "..." },
      { "name": "Транс", "description": "..." }
    ]
  }
}
```

### Квест
```json
{
  "id": "quest_001",
  "title": "Пропавший купец Торин",
  "type": "main",
  "status": "active",
  "description": "Найти купца Торина...",
  "objectives": [
    { "text": "Расспросить жителей", "completed": true },
    { "text": "Найти Торина", "completed": false }
  ],
  "notes": "Грок знает больше...",
  "related": {
    "npcs": ["Грок"],
    "locations": ["Старые шахты"],
    "items": ["Медальон Торина"]
  },
  "reward": { "xp": 200, "gold": 50 }
}
```

### Инвентарь
```json
{
  "currency": { "gold": 15, "silver": 7, "copper": 4 },
  "carry_weight": { "current": 32, "max": 120 },
  "items": [
    {
      "name": "Боевой посох",
      "category": "equipment",
      "description": "1d6 дробящий · двуручный 1d8",
      "weight": 4,
      "icon_type": "weapon"
    },
    {
      "name": "Зелье лечения",
      "category": "consumable",
      "description": "2d4+2 HP",
      "weight": 0.5,
      "quantity": 2,
      "icon_type": "potion"
    }
  ]
}
```
