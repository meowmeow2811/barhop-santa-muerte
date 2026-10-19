(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`juan`,name:`Juan`,description:`Атмосферный кафе-бар с мексиканским настроением.`,address:`ул. Касыма Тыныстанова, 249`,mapUrl:`https://2gis.kg/bishkek/firm/70000001089874516`,festivalSpecial:`Коктейль в мексиканском стиле`,workingHours:`каждый день с 18:00 до 02:00`,image:`/assets/logo/juan_logo.png`},{id:`riad`,name:`Riad`,description:`Стильный бар с отличной коктейльной картой.`,address:`ул. Киевская улица, 203/2`,mapUrl:`https://2gis.kg/bishkek/firm/70000001076790759`,festivalSpecial:`Специальный напиток фестиваля`,workingHours:`с 18:00 до 02:00 кроме понедельника`,image:`/assets/logo/riad_logo.jpg`},{id:`viking`,name:`The Viking pub`,description:`Тематический паб с атмосферой северных воинов и широким выбором напитков.`,address:`ул. Киевская улица, 161`,mapUrl:`https://2gis.kg/bishkek/firm/70000001075002389`,festivalSpecial:`Викинг-спешл на базе текилы`,workingHours:`каждый день с 18:00 до 02:00`,image:`/assets/logo/viking_logo.jpg`},{id:`blackwood`,name:`BlackWood`,description:`Не только коктейли, но и кальяны.`,address:`ул. Токтогула, 110`,mapUrl:`https://2gis.kg/bishkek/geo/70000001102464926`,festivalSpecial:`Специальный напиток фестиваля`,workingHours:`с 18:00 до 03:00`,image:`/assets/logo/Blackwood_logo.jpg`},{id:`obshestvo`,name:`Общество`,description:`Пришёл в один бар, а там их два!`,address:`ул. Жоомарта Боконбаева, 126/1`,mapUrl:`https://2gis.kg/bishkek/firm/70000001089270819`,festivalSpecial:`Авторский коктейль фестиваля`,workingHours:`ПН-ЧТ 18:00-01:45, ПТ-СБ 17:00-02:45, ВС 17:00-01:45`,image:`/assets/logo/obshestvo_logo.png`}],t={ru:{hero:{logo_sub:`BARHOP 2026`,title:`Мексиканская культура. Барная культура. Один маршрут.`,description:`Погрузитесь в атмосферу мексиканского праздника в самом сердце Бишкека.`,explore_btn:`Исследовать маршрут`},story:{title:`История Dia de muertos`,p1:`Dia de muertos (День мертвых) — это не просто праздник, это отражение мексиканского духа, где жизнь и конец идут рука об руку, дополняя друг друга.`,h2:`Жизнь через край`,p2:`В мексиканской традиции конец не считается концом. Это переход, повод для памяти и уважения к корням. Наш бархоп вдохновлен этой философией: ценить каждый момент, наслаждаться вкусом и общением.`,h3:`Культура и Память`,p3:`Мы объединили заведения Бишкека, чтобы создать уникальный маршрут, где каждый бар рассказывает свою часть истории, а каждый коктейль становится данью традиции.`},conditions:{title:`Условия BAR HOP`,p1:`¡Bienvenidos на первый <strong class="green-highlight">BAR HOP</strong> в Кыргызстане!`,p2:`Раз вы здесь, значит, уже посетили один <strong class="green-highlight">из 5 баров-участников</strong>. Теперь пора отправиться в маленькое путешествие по культуре Día de Muertos через коктейли!`,p3:`В каждом баре <strong class="green-highlight">вас ждут 2 авторских напитка</strong>. Пройдите <strong class="green-highlight">все 5 баров,</strong> <strong class="green-highlight">попробуйте 10 коктейлей</strong> и получите в награду <strong>limited мерч</strong> <strong class="green-highlight">BAR HOP</strong>.`,wish:`Не пуха, ни пера — и до встречи на маршруте!`},partner:{title:`Дух древней Мексики`,desc:`Текила Olmeca рождается в сердце региона Халиско. Она несет в себе энергию солнца и традиции предков.`},bars:{title:`Маршрут`,where:`Где:`,when:`Когда:`,special:`Спешл:`,map_btn:`Открыть в 2ГИС`,address_tbd:`Адрес уточняется`,data:{juan:{name:`Juan`,description:`Атмосферный кафе-бар с мексиканским настроением.`,address:`ул. Касыма Тыныстанова, 249`,festivalSpecial:`Коктейль в мексиканском стиле`,workingHours:`каждый день с 18:00 до 02:00`},riad:{name:`Riad`,description:`Стильный бар с отличной коктейльной картой.`,address:`ул. Киевская улица, 203/2`,festivalSpecial:`Специальный напиток фестиваля`,workingHours:`с 18:00 до 02:00 кроме понедельника`},viking:{name:`The Viking pub`,description:`Тематический паб с атмосферой северных воинов и широким выбором напитков.`,address:`ул. Киевская улица, 161`,festivalSpecial:`Викинг-спешл на базе текилы`,workingHours:`каждый день с 18:00 до 02:00`},blackwood:{name:`BlackWood`,description:`Не только коктейли, но и кальяны.`,address:`ул. Токтогула, 110`,festivalSpecial:`Специальный напиток фестиваля`,workingHours:`с 18:00 до 03:00`},obshestvo:{name:`Общество`,description:`Пришёл в один бар, а там их два!`,address:`ул. Жоомарта Боконбаева, 126/1`,festivalSpecial:`Авторский коктейль фестиваля`,workingHours:`ПН-ЧТ 18:00-01:45, ПТ-СБ 17:00-02:45, ВС 17:00-01:45`}}},footer:{quote:`«Конец — это всего лишь начало новой истории»`,back_to_bars:`К барам-участникам`,warning:`Чрезмерное употребление алкоголя вредит вашему здоровью`},common:{loading:`Загрузка атмосферы...`,error:`Произошла ошибка при загрузке приложения. Пожалуйста, попробуйте открыть его в Telegram.`,main_button:`ПОСМОТРЕТЬ МАРШРУТ`}},en:{hero:{logo_sub:`BARHOP 2026`,title:`Mexican Culture. Bar Culture. One Route.`,description:`Immerse yourself in the atmosphere of a Mexican holiday in the heart of Bishkek.`,explore_btn:`Explore Route`},story:{title:`History of Dia de Muertos`,p1:`Dia de Muertos (Day of the Dead) is not just a holiday; it's a reflection of the Mexican spirit, where life and end go hand in hand, complementing each other.`,h2:`Life to the Fullest`,p2:`In Mexican tradition, the end is not considered an end. It is a transition, a reason for memory and respect for roots. Our barhop is inspired by this philosophy: valuing every moment, enjoying taste and communication.`,h3:`Culture and Memory`,p3:`We have brought together venues in Bishkek to create a unique route, where each bar tells its part of the story, and each cocktail becomes a tribute to tradition.`},conditions:{title:`BAR HOP Conditions`,p1:`¡Bienvenidos to the first <strong class="green-highlight">BAR HOP</strong> in Kyrgyzstan!`,p2:`Since you're here, it means you've already visited one <strong class="green-highlight">of the 5 participating bars</strong>. Now it's time to embark on a little journey through Día de Muertos culture through cocktails!`,p3:`In each bar, <strong class="green-highlight">2 signature drinks await you</strong>. Visit <strong class="green-highlight">all 5 bars,</strong> <strong class="green-highlight">try 10 cocktails</strong> and receive a reward of <strong>limited BAR HOP merch</strong>.`,wish:`Good luck, and see you on the route!`},partner:{title:`The Spirit of Ancient Mexico`,desc:`Olmeca Tequila is born in the heart of the Jalisco region. It carries the energy of the sun and the traditions of ancestors.`},bars:{title:`The Route`,where:`Where:`,when:`When:`,special:`Special:`,map_btn:`Open in 2GIS`,address_tbd:`Address to be confirmed`,data:{juan:{name:`Juan`,description:`Atmospheric cafe-bar with a Mexican mood.`,address:`249 Kasym Tynystanov St`,festivalSpecial:`Mexican-style cocktail`,workingHours:`daily from 18:00 to 02:00`},riad:{name:`Riad`,description:`Stylish bar with an excellent cocktail menu.`,address:`203/2 Kievskaya St`,festivalSpecial:`Festival special drink`,workingHours:`18:00 to 02:00 except Mondays`},viking:{name:`The Viking pub`,description:`Themed pub with the atmosphere of northern warriors and a wide selection of drinks.`,address:`161 Kievskaya St`,festivalSpecial:`Tequila-based Viking special`,workingHours:`daily from 18:00 to 02:00`},blackwood:{name:`BlackWood`,description:`Not only cocktails, but also hookahs.`,address:`110 Toktogul St`,festivalSpecial:`Festival special drink`,workingHours:`18:00 to 03:00`},obshestvo:{name:`Obshestvo (Society)`,description:`Came to one bar, and there are two of them!`,address:`126/1 Joomart Bokonbaev St`,festivalSpecial:`Signature festival cocktail`,workingHours:`Mon-Thu 18:00-01:45, Fri-Sat 17:00-02:45, Sun 17:00-01:45`}}},footer:{quote:`“The end is just the beginning of a new story”`,back_to_bars:`To participating bars`,warning:`Excessive alcohol consumption is harmful to your health`},common:{loading:`Loading atmosphere...`,error:`An error occurred while loading the application. Please try opening it in Telegram.`,main_button:`VIEW ROUTE`}}},n=()=>window.Telegram?.WebApp,r=`ru`;function i(){let e=localStorage.getItem(`app_lang`);return e&&(e===`ru`||e===`en`)?e:n()?.initDataUnsafe?.user?.language_code===`en`?`en`:`ru`}function a(e){let n=e.split(`.`),i=t[r];for(let r of n)if(i&&i[r])i=i[r];else{let r=t.ru;for(let t of n)if(r&&r[t])r=r[t];else return e;return r}return i}window.changeLanguage=e=>{if(e===r)return;let t=n();if(t)try{t.HapticFeedback.selectionChanged()}catch{}r=e,localStorage.setItem(`app_lang`,e),t&&t.MainButton.setText(a(`common.main_button`)),c()};function o(){let e=n();if(r=i(),e)try{e.ready(),e.expand(),e.enableClosingConfirmation(),s(e),e.onEvent(`themeChanged`,()=>s(e)),e.setHeaderColor(`secondary_bg_color`),e.setBackgroundColor(`bg_color`),e.MainButton.setText(a(`common.main_button`)),e.MainButton.setParams({color:`#4e7d17`,text_color:`#FFFFFF`}),e.MainButton.show(),e.MainButton.onClick(()=>{e.HapticFeedback.impactOccurred(`medium`);let t=document.querySelector(`#bars`);t&&t.scrollIntoView({behavior:`smooth`})})}catch(e){console.error(`Ошибка инициализации Telegram SDK:`,e)}try{c()}catch(e){console.error(`Ошибка рендеринга приложения:`,e);let t=document.getElementById(`app`);t&&(t.innerHTML=`<div style="padding: 20px; text-align: center;">${a(`common.error`)}</div>`)}}function s(e){if(!e)return;let t=e.themeParams,n=document.body;t.bg_color&&n.style.setProperty(`--tg-theme-bg-color`,t.bg_color),t.text_color&&n.style.setProperty(`--tg-theme-text-color`,t.text_color),t.button_color&&n.style.setProperty(`--tg-theme-button-color`,t.button_color),t.button_text_color&&n.style.setProperty(`--tg-theme-button-text-color`,t.button_text_color),t.secondary_bg_color&&n.style.setProperty(`--tg-theme-secondary-bg-color`,t.secondary_bg_color)}function c(){let e=document.getElementById(`app`);e&&(e.innerHTML=`
    <div class="papel-picado" style="margin: 0; position: absolute; top: 0; left: 0; z-index: 10;"></div>
    ${l()}
    ${u()}
    <div class="container" style="position: relative;">
      ${v()}
      ${f()}
      ${d()}
      ${p()}
      ${m()}
    </div>
    ${_()}
  `,y())}function l(){return`
    <div class="lang-switcher">
      <span class="lang-opt ${r===`ru`?`active`:``}" onclick="window.changeLanguage('ru')">RU</span>
      <span class="lang-divider">|</span>
      <span class="lang-opt ${r===`en`?`active`:``}" onclick="window.changeLanguage('en')">EN</span>
    </div>
  `}function u(){return`
    <section class="hero">
      <img src="/assets/spark_large.png" class="hero-deco-spark-1" alt="">
      <img src="/assets/spark_medium.png" class="hero-deco-spark-2" alt="">
      
      <div class="hero-logo-container">
        <h1 class="hero-logo main">DIA DE MUERTOS</h1>
        <h2 class="hero-logo sub">${a(`hero.logo_sub`)}</h2>
      </div>
      
      <div class="hero-illustration">
        <img src="/assets/skull.png" alt="Dia de muertos" style="width: 100%; height: 100%; object-fit: contain;">
      </div>

      <h2 class="hero-title">${a(`hero.title`)}</h2>
      <p class="hero-description">${a(`hero.description`)}</p>
      
      <a href="#bars" class="btn" id="explore-btn">${a(`hero.explore_btn`)}</a>
    </section>
  `}function d(){return`
    <section class="section scroll-mt" id="story">
      <h2 class="section-title">${a(`story.title`)}</h2>
      <div class="story-content">
        <p>${a(`story.p1`)}</p>
        
        <h3>${a(`story.h2`)}</h3>
        <p>${a(`story.p2`)}</p>
        
        <h3>${a(`story.h3`)}</h3>
        <p>${a(`story.p3`)}</p>
      </div>
    </section>
  `}function f(){return`
    <section class="section scroll-mt" id="conditions">
      <div class="conditions-box">
        <h2 class="section-title">${a(`conditions.title`)}</h2>
        <div class="conditions-content">
          <p>${a(`conditions.p1`)}</p>
          <p>${a(`conditions.p2`)}</p>
          <p>${a(`conditions.p3`)}</p>
          <p class="conditions-wish">${a(`conditions.wish`)}</p>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section class="section scroll-mt" id="olmeca">
      <div class="partner-box">
        <div class="partner-content">
          <img src="/assets/logo/olmeca_baza.png" alt="Olmeca" class="partner-image">
          <div>
            <div class="partner-logo">OLMECA</div>
            <h2 class="partner-title">${a(`partner.title`)}</h2>
            <p class="partner-desc">${a(`partner.desc`)}</p>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section class="section scroll-mt" id="bars">
      <h2 class="section-title">${a(`bars.title`)}</h2>
      <div class="bar-list">
        ${e.map((t,n)=>`
          ${g(t)}
          ${n<e.length-1?h():``}
        `).join(``)}
      </div>
    </section>
  `}function h(){return`
    <div class="section-divider">
      <div class="papel-picado" style="flex: 1;"></div>
      <img src="/assets/plant.png" alt="" class="divider-icon">
      <div class="papel-picado" style="flex: 1;"></div>
    </div>
  `}function g(e){let t=a(`bars.data.${e.id}.name`),n=a(`bars.data.${e.id}.description`),r=a(`bars.data.${e.id}.address`),i=a(`bars.data.${e.id}.workingHours`),o=a(`bars.data.${e.id}.festivalSpecial`),s=e.mapUrl?`<button class="btn btn-small map-link" data-url="${e.mapUrl}">${a(`bars.map_btn`)}</button>`:`<button class="btn btn-small disabled">${a(`bars.address_tbd`)}</button>`;return`
    <div class="bar-card" data-bar-id="${e.id}">
      <div class="bar-card-content">
        <div class="photo-frame">
          <img src="${e.image||`/assets/plant.png`}" alt="${t}" class="bar-card-logo">
        </div>
        <div class="bar-info">
          <h3 class="bar-name">${t}</h3>
          <p class="bar-desc">${n}</p>
          
          <div class="bar-details">
            <div class="bar-detail-item">
              <span class="bar-detail-label">${a(`bars.where`)}</span>
              <span>${r}</span>
            </div>
            ${i?`
              <div class="bar-detail-item">
                <span class="bar-detail-label">${a(`bars.when`)}</span>
                <span>${i}</span>
              </div>
            `:``}
            ${o?`
              <div class="bar-detail-item">
                <span class="bar-detail-label special-highlight">${a(`bars.special`)}</span>
                <span class="special-highlight">${o}</span>
              </div>
            `:``}
          </div>
          
          <div class="bar-actions">
            ${s}
          </div>
        </div>
      </div>
    </div>
  `}function _(){return`
    <footer class="footer">
      <img src="/assets/flower.png" class="footer-deco-flower" alt="">
      <div class="papel-picado" style="position: absolute; top: -10px; left: 0; background-image: url(&quot;data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L40 0 L40 10 Q20 20 0 10 Z' fill='%23d37353'/%3E%3C/svg%3E&quot;);"></div>
      
      <div class="footer-quote">${a(`footer.quote`)}</div>
      <a href="#bars" class="btn" style="background: var(--bg-color); color: var(--tertiary-color); box-shadow: 4px 4px 0px var(--secondary-color);">${a(`footer.back_to_bars`)}</a>
      <p style="margin-top: 40px; font-size: 0.8rem; color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
        © 2026 DIA DE MUERTOS BARHOP 2026 BISHKEK<br>
        ${a(`footer.warning`)}
      </p>
    </footer>
  `}function v(){return`
    <img src="/assets/flower.png" class="deco flower-1" alt="">
    <img src="/assets/flower.png" class="deco flower-2" alt="">
    <img src="/assets/spark_medium.png" class="deco spark-small-1" alt="">
    <img src="/assets/plant.png" class="deco plant-1" alt="">
  `}function y(){let e=n();document.querySelectorAll(`a[href^="#"]`).forEach(t=>{t.addEventListener(`click`,function(n){if(n.preventDefault(),e)try{e.HapticFeedback.impactOccurred(`light`)}catch{}let r=t.getAttribute(`href`);if(r&&r!==`#`)try{let e=document.querySelector(r);e&&e.scrollIntoView({behavior:`smooth`})}catch(e){console.warn(`Ошибка при переходе по ссылке:`,e)}})}),document.querySelectorAll(`.map-link`).forEach(t=>{t.addEventListener(`click`,function(){if(e)try{e.HapticFeedback.impactOccurred(`medium`)}catch{}let n=t.getAttribute(`data-url`);if(n){if(e)try{e.openLink(n)}catch{window.open(n,`_blank`)}else window.open(n,`_blank`)}})})}document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,o):o();