(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`juan`,name:`Juan`,description:`Атмосферный кафе-бар с мексиканским настроением.`,address:`ул. Касыма Тыныстанова, 249`,mapUrl:`https://2gis.kg/bishkek/firm/70000001089874516`,festivalSpecial:`Коктейль в мексиканском стиле`,workingHours:`каждый день с 18:00 до 02:00`,image:`/assets/logo/JUAN Logo.PNG`},{id:`riad`,name:`Riad`,description:`Стильный бар с отличной коктейльной картой.`,address:`Киевская улица, 203/2`,mapUrl:`https://2gis.kg/bishkek/firm/70000001076790759`,festivalSpecial:`Специальный напиток фестиваля`,workingHours:`с 18:00 до 02:00 кроме понедельника`,image:`/assets/logo/riad logo.jpg`},{id:`viking`,name:`The Viking pub`,description:`Тематический паб с атмосферой северных воинов и широким выбором напитков.`,address:`Киевская улица, 161`,mapUrl:`https://2gis.kg/bishkek/firm/70000001075002389`,festivalSpecial:`Викинг-спешл на базе текилы`,workingHours:`каждый день с 18:00 до 02:00`,image:`/assets/logo/Viking logo.JPG`}],t=window.Telegram?.WebApp;function n(){t&&(t.ready(),t.expand(),document.body.style.setProperty(`--tg-theme-bg-color`,t.backgroundColor),document.body.style.setProperty(`--tg-theme-text-color`,t.textColor),document.body.style.setProperty(`--tg-theme-button-color`,t.buttonColor),document.body.style.setProperty(`--tg-theme-button-text-color`,t.buttonTextColor)),r()}function r(){let e=document.getElementById(`app`);e&&(e.innerHTML=`
    <div class="papel-picado" style="margin: 0; position: absolute; top: 0; left: 0; z-index: 10;"></div>
    ${i()}
    <div class="container" style="position: relative;">
      ${d()}
      ${a()}
      ${o()}
      ${s()}
    </div>
    ${u()}
  `,f())}function i(){return`
    <section class="hero">
      <img src="/assets/spark_large.png" class="hero-deco-spark-1" alt="">
      <img src="/assets/spark_medium.png" class="hero-deco-spark-2" alt="">
      
      <div class="hero-logo-container">
        <h1 class="hero-logo main">DIA DE MUERTOS</h1>
        <h2 class="hero-logo sub">BARHOP 2026</h2>
      </div>
      
      <div class="hero-illustration">
        <img src="/assets/skull.png" alt="Dia de muertos" style="width: 100%; height: 100%; object-fit: contain;">
      </div>

      <h2 class="hero-title">Мексиканская культура. Барная культура. Один маршрут.</h2>
      <p class="hero-description">Погрузитесь в атмосферу мексиканского праздника в самом сердце Бишкека.</p>
      
      <a href="#bars" class="btn" id="explore-btn">Исследовать маршрут</a>
    </section>
  `}function a(){return`
    <section class="section scroll-mt" id="story">
      <img src="/assets/candle.png" class="story-deco-candle" alt="">
      <h2 class="section-title">История Dia de muertos</h2>
      <div class="story-content">
        <p>Dia de muertos (День мертвых) — это не просто праздник, это отражение мексиканского духа, где жизнь и смерть идут рука об руку, дополняя друг друга.</p>
        
        <h3>Жизнь через край</h3>
        <p>В мексиканской традиции смерть не считается концом. Это переход, повод для памяти и уважения к корням. Наш бархоп вдохновлен этой философией: ценить каждый момент, наслаждаться вкусом и общением.</p>
        
        <h3>Культура и Память</h3>
        <p>Мы объединили лучшие заведения Бишкека, чтобы создать уникальный маршрут, где каждый бар рассказывает свою часть истории, а каждый коктейль становится данью традиции.</p>
      </div>
    </section>
  `}function o(){return`
    <section class="section scroll-mt" id="olmeca">
      <div class="partner-box">
        <div class="partner-content">
          <img src="/assets/logo/olmeca baza.png" alt="Olmeca" class="partner-image">
          <div>
            <div class="partner-logo">OLMECA</div>
            <h2 class="partner-title">Дух древней Мексики</h2>
            <p class="partner-desc">Текила Olmeca рождается в сердце региона Халиско. Она несет в себе энергию солнца и традиции предков.</p>
          </div>
        </div>
      </div>
    </section>
  `}function s(){return`
    <section class="section scroll-mt" id="bars">
      <h2 class="section-title">Маршрут</h2>
      <div class="bar-list">
        ${e.map((t,n)=>`
          ${l(t)}
          ${n<e.length-1?c():``}
        `).join(``)}
      </div>
    </section>
  `}function c(){return`
    <div class="section-divider">
      <div class="papel-picado" style="flex: 1;"></div>
      <img src="/assets/plant.png" alt="" class="divider-icon">
      <div class="papel-picado" style="flex: 1;"></div>
    </div>
  `}function l(e){let t=e.mapUrl?`<button class="btn btn-small map-link" data-url="${e.mapUrl}">Открыть в 2ГИС</button>`:`<button class="btn btn-small disabled">Адрес уточняется</button>`;return`
    <div class="bar-card">
      <div class="bar-card-content">
        <div class="photo-frame">
          <img src="${e.image||`/assets/plant.png`}" alt="${e.name}" class="bar-card-logo">
        </div>
        <div class="bar-info">
          <h3 class="bar-name">${e.name}</h3>
          <p class="bar-desc">${e.description}</p>
          
          <div class="bar-details">
            <div class="bar-detail-item">
              <span class="bar-detail-label">Где:</span>
              <span>${e.address}</span>
            </div>
            ${e.workingHours?`
              <div class="bar-detail-item">
                <span class="bar-detail-label">Когда:</span>
                <span>${e.workingHours}</span>
              </div>
            `:``}
            ${e.festivalSpecial?`
              <div class="bar-detail-item">
                <span class="bar-detail-label special-highlight">Спешл:</span>
                <span class="special-highlight">${e.festivalSpecial}</span>
              </div>
            `:``}
          </div>
          
          <div class="bar-actions">
            ${t}
          </div>
        </div>
      </div>
    </div>
  `}function u(){return`
    <footer class="footer">
      <img src="/assets/flower.png" class="footer-deco-flower" alt="">
      <div class="papel-picado" style="position: absolute; top: -10px; left: 0; background-image: url(&quot;data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L40 0 L40 10 Q20 20 0 10 Z' fill='%23d37353'/%3E%3C/svg%3E&quot;);"></div>
      
      <div class="footer-quote">«Смерть — это всего лишь начало новой истории»</div>
      <a href="#bars" class="btn" style="background: var(--bg-color); color: var(--tertiary-color); box-shadow: 4px 4px 0px var(--secondary-color);">К барам-участникам</a>
      <p style="margin-top: 40px; font-size: 0.7rem; color: var(--accent-color); opacity: 0.6;">
        © 2026 DIA DE MUERTOS BARHOP 2026 BISHKEK<br>
        Чрезмерное употребление алкоголя вредит вашему здоровью
      </p>
    </footer>
  `}function d(){return`
    <img src="/assets/flower.png" class="deco flower-1" alt="">
    <img src="/assets/flower.png" class="deco flower-2" alt="">
    <img src="/assets/spark_small.png" class="deco spark-small-1" alt="">
    <img src="/assets/plant.png" class="deco plant-1" alt="">
  `}function f(){document.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.addEventListener(`click`,function(t){t.preventDefault();let n=e.getAttribute(`href`);if(!n)return;let r=document.querySelector(n);r&&r.scrollIntoView({behavior:`smooth`})})}),document.querySelectorAll(`.map-link`).forEach(e=>{e.addEventListener(`click`,function(){let n=e.getAttribute(`data-url`);n&&(t?t.openLink(n):window.open(n,`_blank`))})})}document.addEventListener(`DOMContentLoaded`,n);