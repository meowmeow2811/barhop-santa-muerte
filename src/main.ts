import './app.css';
import BARS from './config';
import { Bar } from './types';

// Расширяем интерфейс Window для Telegram SDK
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        headerColor: string;
        backgroundColor: string;
        themeParams: {
          bg_color?: string;
          text_color?: string;
          hint_color?: string;
          link_color?: string;
          button_color?: string;
          button_text_color?: string;
          secondary_bg_color?: string;
        };
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        enableClosingConfirmation: () => void;
        HapticFeedback: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
          selectionChanged: () => void;
        };
        openLink: (url: string) => void;
        onEvent: (eventType: string, eventHandler: () => void) => void;
        MainButton: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          isActive: boolean;
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
          enable: () => void;
          disable: () => void;
          setParams: (params: { color?: string; text_color?: string; text?: string; is_active?: boolean; is_visible?: boolean }) => void;
        };
      };
    };
  }
}

// Инициализация Telegram WebApp SDK
const getTelegramApp = () => window.Telegram?.WebApp;

function initApp() {
  const tg = getTelegramApp();
  
  if (tg) {
    try {
      tg.ready();
      tg.expand();
      tg.enableClosingConfirmation();
      
      applyTheme(tg);
      
      // Подписка на изменение темы
      tg.onEvent('themeChanged', () => applyTheme(tg));

      // Настройка системных цветов Mini App
      tg.setHeaderColor('secondary_bg_color');
      tg.setBackgroundColor('bg_color');

      // Настройка главной кнопки
      tg.MainButton.setText('ПОСМОТРЕТЬ МАРШРУТ');
      tg.MainButton.setParams({
        color: '#4e7d17', // Темно-зеленый из палитры
        text_color: '#FFFFFF'
      });
      tg.MainButton.show();
      tg.MainButton.onClick(() => {
        tg.HapticFeedback.impactOccurred('medium');
        const target = document.querySelector('#bars');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } catch (e) {
      console.error('Ошибка инициализации Telegram SDK:', e);
    }
  }

  try {
    render();
  } catch (e) {
    console.error('Ошибка рендеринга приложения:', e);
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = '<div style="padding: 20px; text-align: center;">Произошла ошибка при загрузке приложения. Пожалуйста, попробуйте открыть его в Telegram.</div>';
    }
  }
}

function applyTheme(tg: any) {
  if (!tg) return;
  
  const theme = tg.themeParams;
  const root = document.body;
  
  if (theme.bg_color) {
    root.style.setProperty('--tg-theme-bg-color', theme.bg_color);
  }
  if (theme.text_color) {
    root.style.setProperty('--tg-theme-text-color', theme.text_color);
  }
  if (theme.button_color) {
    root.style.setProperty('--tg-theme-button-color', theme.button_color);
  }
  if (theme.button_text_color) {
    root.style.setProperty('--tg-theme-button-text-color', theme.button_text_color);
  }
  if (theme.secondary_bg_color) {
    root.style.setProperty('--tg-theme-secondary-bg-color', theme.secondary_bg_color);
  }
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="papel-picado" style="margin: 0; position: absolute; top: 0; left: 0; z-index: 10;"></div>
    ${renderHero()}
    <div class="container" style="position: relative;">
      ${renderDecorations()}
      ${renderConditions()}
      ${renderStory()}
      ${renderOlmeca()}
      ${renderBars()}
    </div>
    ${renderFooter()}
  `;

  setupEventListeners();
}

function renderHero() {
  return `
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
  `;
}

function renderStory() {
  return `
    <section class="section scroll-mt" id="story">
      <h2 class="section-title">История Dia de muertos</h2>
      <div class="story-content">
        <p>Dia de muertos (День мертвых) — это не просто праздник, это отражение мексиканского духа, где жизнь и смерть идут рука об руку, дополняя друг друга.</p>
        
        <h3>Жизнь через край</h3>
        <p>В мексиканской традиции смерть не считается концом. Это переход, повод для памяти и уважения к корням. Наш бархоп вдохновлен этой философией: ценить каждый момент, наслаждаться вкусом и общением.</p>
        
        <h3>Культура и Память</h3>
        <p>Мы объединили заведения Бишкека, чтобы создать уникальный маршрут, где каждый бар рассказывает свою часть истории, а каждый коктейль становится данью традиции.</p>
      </div>
    </section>
  `;
}

function renderConditions() {
  return `
    <section class="section scroll-mt" id="conditions">
      <div class="conditions-box">
        <h2 class="section-title">Условия BAR HOP</h2>
        <div class="conditions-content">
          <p>¡Bienvenidos на первый <strong>BAR HOP</strong> в Кыргызстане!</p>
          <p>Раз вы здесь, значит, уже посетили один из <strong>5 баров-участников</strong>. Теперь пора отправиться в маленькое путешествие по культуре Día de Muertos через коктейли!</p>
          <p>В каждом баре вас ждут <strong>2 авторских напитка</strong>. Пройдите все <strong>5 баров</strong>, попробуйте <strong>10 коктейлей</strong> и получите в награду <strong>limited мерч</strong> BAR HOP.</p>
          <p class="conditions-wish">Не пуха, ни пера — и до встречи на маршруте!</p>
        </div>
      </div>
    </section>
  `;
}

function renderOlmeca() {
  return `
    <section class="section scroll-mt" id="olmeca">
      <div class="partner-box">
        <div class="partner-content">
          <img src="/assets/logo/olmeca_baza.png" alt="Olmeca" class="partner-image">
          <div>
            <div class="partner-logo">OLMECA</div>
            <h2 class="partner-title">Дух древней Мексики</h2>
            <p class="partner-desc">Текила Olmeca рождается в сердце региона Халиско. Она несет в себе энергию солнца и традиции предков.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}


function renderBars() {
  return `
    <section class="section scroll-mt" id="bars">
      <h2 class="section-title">Маршрут</h2>
      <div class="bar-list">
        ${BARS.map((bar, index) => `
          ${renderBarCard(bar)}
          ${index < BARS.length - 1 ? renderDivider() : ''}
        `).join('')}
      </div>
    </section>
  `;
}

function renderDivider() {
  return `
    <div class="section-divider">
      <div class="papel-picado" style="flex: 1;"></div>
      <img src="/assets/plant.png" alt="" class="divider-icon">
      <div class="papel-picado" style="flex: 1;"></div>
    </div>
  `;
}

function renderBarCard(bar: Bar) {
  const mapButton = bar.mapUrl 
    ? `<button class="btn btn-small map-link" data-url="${bar.mapUrl}">Открыть в 2ГИС</button>`
    : `<button class="btn btn-small disabled">Адрес уточняется</button>`;

  return `
    <div class="bar-card" data-bar-id="${bar.id}">
      <div class="bar-card-content">
        <div class="photo-frame">
          <img src="${bar.image || '/assets/plant.png'}" alt="${bar.name}" class="bar-card-logo">
        </div>
        <div class="bar-info">
          <h3 class="bar-name">${bar.name}</h3>
          <p class="bar-desc">${bar.description}</p>
          
          <div class="bar-details">
            <div class="bar-detail-item">
              <span class="bar-detail-label">Где:</span>
              <span>${bar.address}</span>
            </div>
            ${bar.workingHours ? `
              <div class="bar-detail-item">
                <span class="bar-detail-label">Когда:</span>
                <span>${bar.workingHours}</span>
              </div>
            ` : ''}
            ${bar.festivalSpecial ? `
              <div class="bar-detail-item">
                <span class="bar-detail-label special-highlight">Спешл:</span>
                <span class="special-highlight">${bar.festivalSpecial}</span>
              </div>
            ` : ''}
          </div>
          
          <div class="bar-actions">
            ${mapButton}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <img src="/assets/flower.png" class="footer-deco-flower" alt="">
      <div class="papel-picado" style="position: absolute; top: -10px; left: 0; background-image: url(&quot;data:image/svg+xml,%3Csvg width='40' height='20' viewBox='0 0 40 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L40 0 L40 10 Q20 20 0 10 Z' fill='%23d37353'/%3E%3C/svg%3E&quot;);"></div>
      
      <div class="footer-quote">«Смерть — это всего лишь начало новой истории»</div>
      <a href="#bars" class="btn" style="background: var(--bg-color); color: var(--tertiary-color); box-shadow: 4px 4px 0px var(--secondary-color);">К барам-участникам</a>
      <p style="margin-top: 40px; font-size: 0.8rem; color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
        © 2026 DIA DE MUERTOS BARHOP 2026 BISHKEK<br>
        Чрезмерное употребление алкоголя вредит вашему здоровью
      </p>
    </footer>
  `;
}


function renderDecorations() {
  return `
    <img src="/assets/flower.png" class="deco flower-1" alt="">
    <img src="/assets/flower.png" class="deco flower-2" alt="">
    <img src="/assets/spark_medium.png" class="deco spark-small-1" alt="">
    <img src="/assets/plant.png" class="deco plant-1" alt="">
  `;
}

function setupEventListeners() {
  const tg = getTelegramApp();
  
  // Плавный скролл
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      if (tg) {
        try {
          tg.HapticFeedback.impactOccurred('light');
        } catch (e) {}
      }

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      
      try {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      } catch (e) {
        console.warn('Ошибка при переходе по ссылке:', e);
      }
    });
  });

  // Обработка ссылок на карты
  document.querySelectorAll('.map-link').forEach(button => {
    button.addEventListener('click', function() {
      if (tg) {
        try {
          tg.HapticFeedback.impactOccurred('medium');
        } catch (e) {}
      }

      const url = button.getAttribute('data-url');
      if (url) {
        if (tg) {
          try {
            tg.openLink(url);
          } catch (e) {
            window.open(url, '_blank');
          }
        } else {
          window.open(url, '_blank');
        }
      }
    });
  });
}

// Запуск приложения
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
