import './app.css';
import BARS from './config';
import { Bar } from './types';
import { Language, translations } from './i18n';

// Расширяем интерфейс Window для Telegram SDK
declare global {
  interface Window {
    changeLanguage: (lang: Language) => void;
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        headerColor: string;
        backgroundColor: string;
        initDataUnsafe?: {
          user?: {
            language_code?: string;
          };
        };
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

let currentLang: Language = 'ru';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('app_lang') as Language;
    if (saved && (saved === 'ru' || saved === 'en')) {
      return saved;
    }
  } catch (e) {}
  
  const tg = getTelegramApp();
  if (tg?.initDataUnsafe?.user?.language_code === 'en') {
    return 'en';
  }
  
  return 'ru';
}

function t(path: string): string {
  const keys = path.split('.');
  let result: any = translations[currentLang];
  
  for (const key of keys) {
    if (result && result[key]) {
      result = result[key];
    } else {
      // Fallback to RU
      let fallback: any = translations['ru'];
      for (const fKey of keys) {
        if (fallback && fallback[fKey]) {
          fallback = fallback[fKey];
        } else {
          return path;
        }
      }
      return fallback;
    }
  }
  return result;
}

window.changeLanguage = (lang: Language) => {
  if (lang === currentLang) return;
  
  const tg = getTelegramApp();
  if (tg) {
    try {
      tg.HapticFeedback.selectionChanged();
    } catch (e) {}
  }
  
  currentLang = lang;
  try {
    localStorage.setItem('app_lang', lang);
  } catch (e) {}
  
  if (tg) {
    tg.MainButton.setText(t('common.main_button'));
  }
  
  render();
};

function initApp() {
  const tg = getTelegramApp();
  
  currentLang = getInitialLanguage();
  
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
      tg.MainButton.setText(t('common.main_button'));
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
      app.innerHTML = `<div style="padding: 20px; text-align: center;">${t('common.error')}</div>`;
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
    ${renderLanguageSwitcher()}
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

function renderLanguageSwitcher() {
  return `
    <div class="lang-switcher">
      <span class="lang-opt ${currentLang === 'ru' ? 'active' : ''}" onclick="window.changeLanguage('ru')">RU</span>
      <span class="lang-divider">|</span>
      <span class="lang-opt ${currentLang === 'en' ? 'active' : ''}" onclick="window.changeLanguage('en')">EN</span>
    </div>
  `;
}

function renderHero() {
  return `
    <section class="hero">
      <img src="/assets/spark_large.png" class="hero-deco-spark-1" alt="">
      <img src="/assets/spark_medium.png" class="hero-deco-spark-2" alt="">
      
      <div class="hero-logo-container">
        <h1 class="hero-logo main">DIA DE MUERTOS</h1>
        <h2 class="hero-logo sub">${t('hero.logo_sub')}</h2>
      </div>
      
      <div class="hero-illustration">
        <img src="/assets/skull.png" alt="Dia de muertos" style="width: 100%; height: 100%; object-fit: contain;">
      </div>

      <h2 class="hero-title">${t('hero.title')}</h2>
      <p class="hero-description">${t('hero.description')}</p>
      
      <a href="#bars" class="btn" id="explore-btn">${t('hero.explore_btn')}</a>
    </section>
  `;
}

function renderStory() {
  return `
    <section class="section scroll-mt" id="story">
      <h2 class="section-title">${t('story.title')}</h2>
      <div class="story-content">
        <p>${t('story.p1')}</p>
        
        <h3>${t('story.h2')}</h3>
        <p>${t('story.p2')}</p>
        
        <h3>${t('story.h3')}</h3>
        <p>${t('story.p3')}</p>
      </div>
    </section>
  `;
}

function renderConditions() {
  return `
    <section class="section scroll-mt" id="conditions">
      <div class="conditions-box">
        <div class="conditions-dates">${t('conditions.dates')}</div>
        <h2 class="section-title">${t('conditions.title')}</h2>
        <div class="conditions-content">
          <p>${t('conditions.p1')}</p>
          <p>${t('conditions.p2')}</p>
          <p>${t('conditions.p3')}</p>
          <p class="conditions-wish">${t('conditions.wish')}</p>
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
            <h2 class="partner-title">${t('partner.title')}</h2>
            <p class="partner-desc">${t('partner.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBars() {
  return `
    <section class="section scroll-mt" id="bars">
      <h2 class="section-title">${t('bars.title')}</h2>
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
  const name = t(`bars.data.${bar.id}.name`);
  const description = t(`bars.data.${bar.id}.description`);
  const address = t(`bars.data.${bar.id}.address`);
  const workingHours = t(`bars.data.${bar.id}.workingHours`);
  const festivalSpecial = t(`bars.data.${bar.id}.festivalSpecial`);

  const mapButton = bar.mapUrl 
    ? `<button class="btn btn-small map-link" data-url="${bar.mapUrl}">${t('bars.map_btn')}</button>`
    : `<button class="btn btn-small disabled">${t('bars.address_tbd')}</button>`;

  return `
    <div class="bar-card" data-bar-id="${bar.id}">
      <div class="bar-card-content">
        <div class="photo-frame">
          <img src="${bar.image || '/assets/plant.png'}" alt="${name}" class="bar-card-logo">
        </div>
        <div class="bar-info">
          <h3 class="bar-name">${name}</h3>
          <p class="bar-desc">${description}</p>
          
          <div class="bar-details">
            <div class="bar-detail-item">
              <span class="bar-detail-label">${t('bars.where')}</span>
              <span>${address}</span>
            </div>
            ${workingHours ? `
              <div class="bar-detail-item">
                <span class="bar-detail-label">${t('bars.when')}</span>
                <span>${workingHours}</span>
              </div>
            ` : ''}
            ${festivalSpecial ? `
              <div class="bar-detail-item">
                <span class="bar-detail-label special-highlight">${t('bars.special')}</span>
                <span class="special-highlight">${festivalSpecial}</span>
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
      
      <div class="footer-quote">${t('footer.quote')}</div>
      <a href="#bars" class="btn" style="background: var(--bg-color); color: var(--tertiary-color); box-shadow: 4px 4px 0px var(--secondary-color);">${t('footer.back_to_bars')}</a>
      <p style="margin-top: 40px; font-size: 0.8rem; color: var(--secondary-color); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
        © 2026 DIA DE MUERTOS BARHOP 2026 BISHKEK<br>
        ${t('footer.warning')}
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
