(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={"message-square":`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,user:`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,briefcase:`<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,"file-text":`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>`,layers:`<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,edit:`<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>`,send:`<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>`,"chevron-right":`<polyline points="9 18 15 12 9 6"/>`,check:`<polyline points="20 6 9 17 4 12"/>`,star:`<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,"plus-circle":`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,"map-pin":`<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,"alert-circle":`<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,"more-vertical":`<circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="19" r="1.5" fill="currentColor" stroke="none"/>`,gift:`<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>`};function t(t,n=20){return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e[t]??``}</svg>`}var n={name:`Леголас Громовержец`,race:`Эльф`,class:`Волшебник`,level:1,alignment:`Нейтрально-добрый`,xp:0,xpNextLevel:300,hp:{current:8,max:8},ac:13,speed:30,proficiencyBonus:2,abilities:{str:{score:8,modifier:-1},dex:{score:16,modifier:3},con:{score:14,modifier:2},int:{score:15,modifier:2},wis:{score:12,modifier:1},cha:{score:10,modifier:0}},savingThrows:{proficient:[`int`,`wis`],values:{str:-1,dex:3,con:2,int:4,wis:3,cha:0}},skills:[{name:`Атлетика`,ability:`str`,value:-1,proficient:!1},{name:`Акробатика`,ability:`dex`,value:3,proficient:!1},{name:`Ловкость рук`,ability:`dex`,value:3,proficient:!1},{name:`Скрытность`,ability:`dex`,value:3,proficient:!1},{name:`Выносливость`,ability:`con`,value:2,proficient:!1},{name:`Магия`,ability:`int`,value:4,proficient:!0},{name:`История`,ability:`int`,value:4,proficient:!0},{name:`Расследование`,ability:`int`,value:2,proficient:!1},{name:`Природа`,ability:`int`,value:2,proficient:!1},{name:`Религия`,ability:`int`,value:2,proficient:!1},{name:`Проницательность`,ability:`wis`,value:3,proficient:!0},{name:`Медицина`,ability:`wis`,value:1,proficient:!1},{name:`Восприятие`,ability:`wis`,value:1,proficient:!1},{name:`Выживание`,ability:`wis`,value:1,proficient:!1},{name:`Уход за животными`,ability:`wis`,value:1,proficient:!1},{name:`Обман`,ability:`cha`,value:0,proficient:!1},{name:`Запугивание`,ability:`cha`,value:0,proficient:!1},{name:`Выступление`,ability:`cha`,value:0,proficient:!1},{name:`Убеждение`,ability:`cha`,value:0,proficient:!1}],attacks:[{name:`Боевой посох`,bonus:1,description:`1d6-1 дробящий · 1d8-1 двуручно`}],resources:[{name:`Магическое Восстановление`,current:1,max:1,recharge:`Длинный отдых`}],spellcasting:{dc:12,attackBonus:4,cantrips:[`Огненный Снаряд`,`Свет`,`Луч Холода`],spellSlots:[{level:1,current:2,max:2}],spells:[{name:`Обнаружение Магии`,level:1,prepared:!0},{name:`Щит`,level:1,prepared:!0},{name:`Падение Пёрышком`,level:1,prepared:!1}]},traits:{classFeatures:[{name:`Магическое Восстановление`,description:`Один раз в день, во время короткого отдыха, можно восстановить потраченные слоты заклинаний на суммарный уровень не выше половины вашего уровня волшебника (округлённого вверх).`},{name:`Колдовство`,description:`Используете Интеллект как характеристику заклинателя. Сложность спасброска от ваших заклинаний равна 8 + бонус мастерства + модификатор Интеллекта.`}],racialTraits:[{name:`Наследие Фей`,description:`Вы совершаете с преимуществом спасброски от очарования, и вас нельзя усыпить магическим путём.`},{name:`Транс`,description:`Вам не нужен полноценный сон. Вместо этого вы медитируете в течение 4 часов в день.`}]}},r=[{id:`quest_001`,title:`Пропавший купец Торин`,type:`main`,description:`Найти пропавшего купца Торина и узнать, что с ним случилось.`,objectives:[{text:`Расспросить жителей деревни`,completed:!0},{text:`Исследовать дорогу к шахтам`,completed:!1},{text:`Найти купца Торина`,completed:!1}],notes:`Грок знает больше, чем говорит. Он нервничал, когда упомянули Старые шахты.`,related:{npcs:[`Грок`,`Торин`],locations:[`Старые шахты`,`Деревня Миствейл`],items:[`Медальон Торина`]},reward:{xp:200,gold:50}},{id:`quest_002`,title:`Волки в окрестностях`,type:`side`,description:`Жители жалуются на участившиеся нападения волков на скот.`,objectives:[{text:`Найти логово волков`,completed:!1},{text:`Уничтожить или прогнать стаю`,completed:!1},{text:`Вернуться к старосте`,completed:!1}],notes:`Волки ведут себя необычно — возможно, под влиянием магии.`,related:{npcs:[`Бургомистр Эдвин`],locations:[`Лес Туманов`],items:[]},reward:{xp:100,gold:25}},{id:`quest_003`,title:`Артефакт из гробницы`,type:`completed`,description:`Доставить древний артефакт из заброшенной гробницы в библиотеку.`,objectives:[{text:`Найти гробницу на севере`,completed:!0},{text:`Получить артефакт`,completed:!0},{text:`Доставить в библиотеку Мистара`,completed:!0}],notes:`Выполнено. Маг Мистар был очень доволен находкой.`,related:{npcs:[`Мистар`],locations:[`Гробница Древних`,`Библиотека Мистара`],items:[`Осколок Вечности`]},reward:{xp:150,gold:30}}],i={currency:{gold:15,silver:7,copper:4},carryWeight:{current:32,max:120},items:[{name:`Боевой посох`,category:`equipment`,description:`1d6 дробящий · двуручный 1d8`,weight:4,iconType:`weapon`},{name:`Мантия волшебника`,category:`equipment`,description:`Лёгкая броня · +1 AC при ношении`,weight:3,iconType:`default`},{name:`Книга заклинаний`,category:`equipment`,description:`Содержит все изученные заклинания`,weight:3,iconType:`spellbook`},{name:`Зелье лечения`,category:`consumable`,description:`2d4+2 HP`,weight:.5,quantity:2,iconType:`potion`},{name:`Факел`,category:`consumable`,description:`Освещает 6 м, горит 1 час`,weight:1,quantity:5,iconType:`light`},{name:`Рацион`,category:`consumable`,description:`На один день`,weight:2,quantity:3,iconType:`default`},{name:`Верёвка (15 м)`,category:`tool`,description:`Шёлковая верёвка`,weight:5,iconType:`tool`},{name:`Набор исследователя`,category:`tool`,description:`Крюк, карты, компас`,weight:6,iconType:`tool`},{name:`Медальон Торина`,category:`quest`,description:`Принадлежало пропавшему купцу`,weight:.1,iconType:`quest`}]},a=[{role:`gm`,text:`Вы стоите у ворот деревни Миствейл. Туман стелется по земле, и где-то вдали слышен вой волков. Трактирщик Грок, стоящий у входа, нервно оглядывается по сторонам.`,timestamp:`14:23`},{role:`player`,text:`Подхожу к Гроку и спрашиваю о пропавшем купце.`,timestamp:`14:24`},{role:`gm`,text:`Грок вздрагивает при вашем приближении. "Торин? Да, он был здесь три дня назад... направлялся к старым шахтам на севере. Говорил, что нашёл что-то важное." Он замолкает и отводит взгляд.`,timestamp:`14:25`,diceCheck:{type:`Проницательность`,result:14,dc:12,success:!0,note:`Грок явно что-то скрывает`}}],o=[`Расспросить подробнее`,`Проверить снаряжение`,`Отправиться к шахтам`,`Спросить о вознаграждении`];function s(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function c(e){let t=e.role===`gm`,n=e.diceCheck?`<div class="dice-check">
        <div class="dice-check-label">ПРОВЕРКА</div>
        <div class="dice-check-result">
          <span class="dice-type">${s(e.diceCheck.type)}</span>
          —
          <span class="dice-number">${e.diceCheck.result}</span>
          (DC ${e.diceCheck.dc})
          —
          <span class="${e.diceCheck.success?`dice-success`:`dice-fail`}">${e.diceCheck.success?`Успех`:`Провал`}</span>
        </div>
        <div class="dice-note">${s(e.diceCheck.note)}</div>
      </div>`:``;return`<div class="message message-${t?`gm`:`player`}">
    <div class="message-bubble">
      <div class="message-text">${s(e.text)}</div>
      ${n}
      <div class="message-time">${e.timestamp}</div>
    </div>
  </div>`}function l(){let e=[...a],n=document.createElement(`div`);n.innerHTML=`
    <header class="screen-header">
      <div class="chat-gm-info">
        <div class="gm-avatar">${t(`layers`,18)}</div>
        <div>
          <div class="gm-name">Game Master</div>
          <div class="gm-campaign">Кампания: Туманные горы</div>
        </div>
      </div>
      <button class="icon-btn">${t(`more-vertical`,20)}</button>
    </header>

    <div class="messages-area" id="messages-area">
      <div class="messages-list" id="messages-list">
        ${e.map(c).join(``)}
      </div>
      <div class="quick-actions" id="quick-actions">
        ${o.map(e=>`<button class="chip chip-action">${s(e)}</button>`).join(``)}
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
          ${t(`send`,16)}
        </button>
      </div>
    </div>
  `;let r=n.querySelector(`#messages-list`),i=n.querySelector(`#quick-actions`),l=n.querySelector(`#messages-area`),u=n.querySelector(`#chat-input`),d=n.querySelector(`#send-btn`);function f(){requestAnimationFrame(()=>{l.scrollTop=l.scrollHeight})}function p(t){let n=new Date,a={role:`player`,text:t,timestamp:`${n.getHours()}:${String(n.getMinutes()).padStart(2,`0`)}`};e.push(a);let o=document.createElement(`div`);o.innerHTML=c(a),r.appendChild(o.firstElementChild),i.style.display=`none`,f()}return d.addEventListener(`click`,()=>{let e=u.value.trim();e&&(u.value=``,p(e))}),u.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let e=u.value.trim();if(!e)return;u.value=``,p(e)}}),i.addEventListener(`click`,e=>{let t=e.target.closest(`.chip-action`);t&&p(t.textContent??``)}),f(),n}var u={str:`СИЛ`,dex:`ЛОВ`,con:`ВЫН`,int:`ИНТ`,wis:`МДР`,cha:`ХАР`},d={str:`Сила`,dex:`Ловкость`,con:`Выносливость`,int:`Интеллект`,wis:`Мудрость`,cha:`Харизма`},f=[`str`,`dex`,`con`,`int`,`wis`,`cha`];function p(e){return e>0?`+${e}`:`${e}`}function m(){let e=n,r=e.hp.current/e.hp.max*100<25,i=Math.min(100,Math.round(e.xp/e.xpNextLevel*100)),a=[{label:`HP`,value:`${e.hp.current}/${e.hp.max}`,danger:r},{label:`AC`,value:`${e.ac}`,danger:!1},{label:`Скорость`,value:`${e.speed} фт`,danger:!1},{label:`Мастерство`,value:`+${e.proficiencyBonus}`,danger:!1}].map(e=>`
    <div class="metric-card">
      <div class="metric-label">${e.label}</div>
      <div class="metric-value${e.danger?` metric-danger`:``}">${e.value}</div>
    </div>
  `).join(``),o=f.map(t=>{let n=e.abilities[t],r=n.modifier>0?`mod-pos`:n.modifier<0?`mod-neg`:`mod-zero`;return`
      <div class="ability-card">
        <div class="ability-label">${u[t]}</div>
        <div class="ability-score">${n.score}</div>
        <div class="ability-mod ${r}">${p(n.modifier)}</div>
      </div>
    `}).join(``),s=e.attacks.map(e=>`
    <div class="list-card">
      <div>
        <div class="list-card-name">${e.name}</div>
        <div class="list-card-desc">${e.description}</div>
      </div>
      <div class="list-card-value">${p(e.bonus)}</div>
    </div>
  `).join(``),c=f.map(t=>{let n=e.savingThrows.proficient.includes(t),r=e.savingThrows.values[t];return`<span class="chip ${n?`chip-proficient`:`chip-normal`}">${u[t]} ${p(r)}</span>`}).join(``),l=e.resources.map(e=>{let t=Array.from({length:e.max},(t,n)=>`<span class="resource-dot${n<e.current?` resource-dot-used`:``}"></span>`).join(``);return`
      <div class="resource-card">
        <div class="resource-header">
          <div class="resource-name">${e.name}</div>
          <div class="resource-count">${e.current}/${e.max}</div>
        </div>
        <div class="resource-dots">${t}</div>
        <div class="resource-recharge">${e.recharge}</div>
      </div>
    `}).join(``);return`
    <div class="char-header">
      <div class="char-avatar">${t(`user`,24)}</div>
      <div>
        <div class="char-name">${e.name}</div>
        <div class="char-subtitle">${e.race} · ${e.class} · Уровень ${e.level}</div>
        <div class="char-alignment">${e.alignment}</div>
      </div>
    </div>

    <div class="xp-bar-wrap">
      <div class="xp-bar-label">XP: ${e.xp} / ${e.xpNextLevel}</div>
      <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${i}%"></div></div>
    </div>

    <div class="section-label">Метрики</div>
    <div class="metrics-grid">${a}</div>

    <div class="section-label">Характеристики</div>
    <div class="abilities-grid">${o}</div>

    <div class="section-label">Атаки</div>
    <div class="list-cards">${s}</div>

    <div class="section-label">Спасброски</div>
    <div class="chips-row">${c}</div>

    <div class="section-label">Ресурсы</div>
    <div class="resource-list">${l}</div>
  `}function h(){let e={};return f.forEach(t=>{e[t]=n.skills.filter(e=>e.ability===t)}),f.map(t=>{let n=e[t];if(!n||n.length===0)return``;let r=n.map((e,t)=>`
      <div class="skill-row${e.proficient?` skill-proficient`:``}${t<n.length-1?` skill-divider`:``}">
        <span class="skill-name">${e.name}</span>
        <span class="skill-value">${p(e.value)}</span>
      </div>
    `).join(``);return`
      <div class="skill-group">
        <div class="group-label">${d[t]}</div>
        <div class="skill-list">${r}</div>
      </div>
    `}).join(``)}function g(){let e=n.spellcasting,r=e.spellSlots.every(e=>e.current===0),i=r?`<div class="spell-slots-banner">${t(`alert-circle`,16)} Все слоты заклинаний израсходованы. Доступны только кантрипы.</div>`:``,a=`
    <div class="section-label">КАНТРИПЫ</div>
    <div class="chips-row">${e.cantrips.map(e=>`<span class="chip chip-normal">${e}</span>`).join(``)}</div>
  `,o={};e.spells.forEach(e=>{o[e.level]||(o[e.level]=[]),o[e.level].push(e)});let s=e.spellSlots.map(e=>{let t=Array.from({length:e.max},(t,n)=>`<span class="slot-dot${n<e.current?` slot-dot-active`:``}${r?` slot-dot-empty-danger`:``}"></span>`).join(``),n=(o[e.level]??[]).map(e=>`
      <div class="spell-row${e.prepared?` spell-prepared`:``}${r&&!e.prepared?` spell-disabled`:``}">
        <span class="spell-name">${e.name}</span>
        <span class="spell-status">${r&&!e.prepared?`нет слотов`:e.prepared?`подготовлено`:`в книге`}</span>
      </div>
    `).join(``);return`
      <div class="spell-level-section">
        <div class="spell-level-header">
          <span class="spell-level-label">${e.level} УРОВЕНЬ</span>
          <div class="slot-dots">
            ${t}
            <span class="slot-count${r?` slot-count-danger`:``}">${e.current}/${e.max}</span>
          </div>
        </div>
        <div class="spell-list">${n}</div>
      </div>
    `}).join(``);return`
    ${i}
    <div class="spellcaster-header">
      <div class="spellcaster-stat">
        <div class="spellcaster-stat-value">${e.dc}</div>
        <div class="spellcaster-stat-label">Сложность</div>
      </div>
      <div class="spellcaster-divider"></div>
      <div class="spellcaster-stat">
        <div class="spellcaster-stat-value">${p(e.attackBonus)}</div>
        <div class="spellcaster-stat-label">Бонус атаки</div>
      </div>
    </div>
    ${a}
    ${s}
  `}function _(){let e=n.traits;function t(e){return e.map(e=>`
      <div class="trait-card">
        <div class="trait-name">${e.name}</div>
        <div class="trait-desc">${e.description}</div>
      </div>
    `).join(``)}return`
    <div class="group-label">Классовые способности</div>
    ${t(e.classFeatures)}
    <div class="group-label" style="margin-top:12px">Расовые особенности</div>
    ${t(e.racialTraits)}
  `}var v=[{id:`main`,label:`Основное`,render:m},{id:`skills`,label:`Навыки`,render:h},{id:`magic`,label:`Магия`,render:g},{id:`traits`,label:`Черты`,render:_}];function y(){let e=document.createElement(`div`);e.innerHTML=`
    <header class="screen-header">
      <span class="screen-title">Персонаж</span>
      <button class="icon-btn">${t(`edit`,20)}</button>
    </header>
    <div class="inner-tabs-header" id="inner-tabs-header">
      ${v.map((e,t)=>`<button class="inner-tab${t===0?` active`:``}" data-tab="${e.id}">${e.label}</button>`).join(``)}
    </div>
    <div class="screen-content" id="char-content">
      ${v[0].render()}
    </div>
  `;let n=e.querySelector(`#inner-tabs-header`),r=e.querySelector(`#char-content`);return n.addEventListener(`click`,e=>{let t=e.target.closest(`.inner-tab`);if(!t)return;let i=t.dataset.tab,a=v.find(e=>e.id===i);a&&(n.querySelectorAll(`.inner-tab`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),r.innerHTML=a.render(),r.scrollTop=0)}),e}var b={weapon:{bg:`var(--accent-bg)`,stroke:`var(--accent)`,svgIcon:`briefcase`},spellbook:{bg:`var(--purple-bg)`,stroke:`var(--purple-stroke)`,svgIcon:`file-text`},potion:{bg:`var(--danger-bg)`,stroke:`#A32D2D`,svgIcon:`plus-circle`},light:{bg:`var(--warning-bg)`,stroke:`#854F0B`,svgIcon:`star`},tool:{bg:`var(--success-bg)`,stroke:`#0F6E56`,svgIcon:`edit`},quest:{bg:`var(--pink-bg)`,stroke:`var(--pink-text)`,svgIcon:`map-pin`},default:{bg:`var(--bg-secondary)`,stroke:`var(--text-secondary)`,svgIcon:`briefcase`}};function x(e){let n=b[e.iconType],r=`<div class="item-icon" style="background:${n.bg};color:${n.stroke}">${t(n.svgIcon,18)}</div>`,i=e.quantity===void 0?`<span class="item-weight">${e.weight} фунт</span>`:`<span class="item-qty">×${e.quantity}</span>`,a=e.category===`quest`?`<span class="item-arrow">${t(`chevron-right`,16)}</span>`:``;return`
    <div class="item-row">
      ${r}
      <div class="item-info">
        <div class="item-name">${e.name}</div>
        <div class="item-desc">${e.description}</div>
      </div>
      <div class="item-meta">${i}${a}</div>
    </div>
  `}function S(){let{currency:e,carryWeight:n,items:r}=i,a=Math.min(100,Math.round(n.current/n.max*100)),o=a>75?`var(--danger)`:a>50?`var(--warning)`:`var(--success)`,s=r.filter(e=>e.category===`equipment`),c=r.filter(e=>e.category===`consumable`),l=r.filter(e=>e.category===`tool`),u=r.filter(e=>e.category===`quest`);function d(e,t){return t.length===0?``:`
      <div class="inv-section">
        <div class="inv-section-title">${e}</div>
        <div class="inv-item-list">
          ${t.map(x).join(``)}
        </div>
      </div>
    `}let f=document.createElement(`div`);return f.innerHTML=`
    <header class="screen-header">
      <span class="screen-title">Инвентарь</span>
      <button class="icon-btn">${t(`edit`,20)}</button>
    </header>
    <div class="screen-content">
      <div class="inv-summary-grid">
        <div class="summary-card">
          <div class="summary-label">КОШЕЛЁК</div>
          <div class="wallet-gold">${e.gold} зм</div>
          <div class="wallet-rest">${e.silver} см · ${e.copper} мм</div>
        </div>
        <div class="summary-card">
          <div class="summary-label">НАГРУЗКА</div>
          <div class="weight-value">${n.current} / ${n.max} фунт</div>
          <div class="weight-track">
            <div class="weight-fill" style="width:${a}%;background:${o}"></div>
          </div>
        </div>
      </div>

      ${d(`Экипировка`,s)}
      ${d(`Расходники`,c)}
      ${d(`Инструменты и прочее`,l)}
      ${d(`Квестовые предметы`,u)}
    </div>
  `,f}var C={main:{iconBg:`var(--pink-bg)`,iconColor:`var(--pink-text)`,iconName:`star`,badgeBg:`var(--pink-bg)`,badgeText:`var(--pink-text)`,badgeLabel:`Основной`},side:{iconBg:`var(--accent-bg)`,iconColor:`var(--accent)`,iconName:`plus-circle`,badgeBg:`var(--accent-bg)`,badgeText:`var(--accent-text)`,badgeLabel:`Побочный`},completed:{iconBg:`var(--green-bg)`,iconColor:`var(--green-text)`,iconName:`check`,badgeBg:`var(--green-bg)`,badgeText:`var(--green-text)`,badgeLabel:`Завершён`}};function w(e){let n=C[e.type],r=e.type===`completed`,i=e.objectives.filter(e=>e.completed).length,a=e.objectives.map(e=>`
    <div class="objective-row">
      <span class="objective-marker${e.completed?` objective-done`:``}">
        ${e.completed?t(`check`,12):``}
      </span>
      <span class="objective-text${e.completed?` objective-text-done`:``}">${e.text}</span>
    </div>
  `).join(``),o=e.notes?`<div class="quest-notes">
        <div class="quest-notes-label">ЗАМЕТКИ</div>
        <div class="quest-notes-text">${e.notes}</div>
      </div>`:``,s=[];e.related.npcs.forEach(e=>s.push(`<span class="related-tag">${t(`user`,12)} ${e}</span>`)),e.related.locations.forEach(e=>s.push(`<span class="related-tag">${t(`map-pin`,12)} ${e}</span>`)),e.related.items.forEach(e=>s.push(`<span class="related-tag">${t(`briefcase`,12)} ${e}</span>`)),(e.reward.xp>0||e.reward.gold>0)&&s.push(`<span class="related-tag related-tag-reward">${t(`gift`,12)} ${e.reward.xp} XP · ${e.reward.gold} зм</span>`);let c=s.length>0?`<div class="quest-tags">${s.join(``)}</div>`:``;return`
    <div class="quest-card${r?` quest-card-completed`:``}" data-quest-id="${e.id}">
      <div class="quest-header" data-expand-trigger>
        <div class="quest-header-left">
          <div class="quest-icon" style="background:${n.iconBg};color:${n.iconColor}">${t(n.iconName,16)}</div>
          <div class="quest-header-info">
            <div class="quest-meta-row">
              <span class="quest-badge" style="background:${n.badgeBg};color:${n.badgeText}">${n.badgeLabel}</span>
              <span class="quest-progress">${i}/${e.objectives.length}</span>
            </div>
            <div class="quest-title">${e.title}</div>
            <div class="quest-desc">${e.description}</div>
          </div>
        </div>
        <div class="quest-chevron">${t(`chevron-right`,18)}</div>
      </div>
      <div class="quest-body" hidden>
        <div class="quest-objectives">${a}</div>
        ${o}
        ${c}
      </div>
    </div>
  `}function T(){let e=`all`,t=document.createElement(`div`);t.innerHTML=`
    <header class="screen-header">
      <span class="screen-title">Журнал квестов</span>
      <div class="filter-chips" id="filter-chips">
        <button class="chip chip-filter active" data-filter="all">Все</button>
        <button class="chip chip-filter" data-filter="active">Активные</button>
        <button class="chip chip-filter" data-filter="completed">Завершённые</button>
      </div>
    </header>
    <div class="screen-content" id="quests-list">
      ${r.map(w).join(``)}
    </div>
  `;let n=t.querySelector(`#filter-chips`),i=t.querySelector(`#quests-list`);function a(){i.querySelectorAll(`.quest-card`).forEach(t=>{let n=t.dataset.questId,i=r.find(e=>e.id===n);if(!i)return;let a=i.type===`completed`,o=e===`all`||e===`active`&&!a||e===`completed`&&a;t.style.display=o?``:`none`})}return n.addEventListener(`click`,t=>{let r=t.target.closest(`.chip-filter`);r&&(e=r.dataset.filter??`all`,n.querySelectorAll(`.chip-filter`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),a())}),i.addEventListener(`click`,e=>{let t=e.target.closest(`[data-expand-trigger]`);if(!t)return;let n=t.closest(`.quest-card`);if(!n)return;let r=n.querySelector(`.quest-body`),i=n.querySelector(`.quest-chevron`);if(!r||!i)return;let a=!r.hidden;r.hidden=a,i.classList.toggle(`quest-chevron-open`,!a)}),t}var E=[{id:`chat`,label:`Чат`,iconName:`message-square`,render:l},{id:`character`,label:`Персонаж`,iconName:`user`,render:y},{id:`inventory`,label:`Инвентарь`,iconName:`briefcase`,render:S},{id:`quests`,label:`Квесты`,iconName:`file-text`,render:T}],D=document.querySelector(`#app`),O=E.map(e=>{let t=e.render();return t.classList.add(`screen`),t.dataset.screen=e.id,t}),k=document.createElement(`nav`);k.className=`tab-bar`,k.setAttribute(`role`,`tablist`),k.innerHTML=E.map((e,n)=>`
  <button class="tab-item${n===0?` active`:``}" data-tab="${e.id}" role="tab" aria-selected="${n===0}">
    ${t(e.iconName,20)}
    <span>${e.label}</span>
  </button>
`).join(``),O[0].classList.add(`active`),O.forEach(e=>D.appendChild(e)),D.appendChild(k),k.addEventListener(`click`,e=>{let t=e.target.closest(`.tab-item`);if(!t)return;let n=t.dataset.tab;k.querySelectorAll(`.tab-item`).forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-selected`,`false`)}),t.classList.add(`active`),t.setAttribute(`aria-selected`,`true`),O.forEach(e=>{e.classList.toggle(`active`,e.dataset.screen===n)})});