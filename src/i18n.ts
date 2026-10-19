
export type Language = 'ru' | 'en';

export const translations = {
  ru: {
    hero: {
      logo_sub: 'BARHOP 2026',
      title: 'Мексиканская культура. Барная культура. Один маршрут.',
      description: 'Погрузитесь в атмосферу мексиканского праздника в самом сердце Бишкека.',
      explore_btn: 'Исследовать маршрут',
    },
    story: {
      title: 'История Dia de muertos',
      p1: 'Dia de muertos (День мертвых) — это не просто праздник, это отражение мексиканского духа, где жизнь и конец идут рука об руку, дополняя друг друга.',
      h2: 'Жизнь через край',
      p2: 'В мексиканской традиции конец не считается концом. Это переход, повод для памяти и уважения к корням. Наш бархоп вдохновлен этой философией: ценить каждый момент, наслаждаться вкусом и общением.',
      h3: 'Культура и Память',
      p3: 'Мы объединили заведения Бишкека, чтобы создать уникальный маршрут, где каждый бар рассказывает свою часть истории, а каждый коктейль становится данью традиции.',
    },
    conditions: {
      title: 'Условия BAR HOP',
      p1: '¡Bienvenidos на первый <strong class="green-highlight">BAR HOP</strong> в Кыргызстане!',
      p2: 'Раз вы здесь, значит, уже посетили один <strong class="green-highlight">из 5 баров-участников</strong>. Теперь пора отправиться в маленькое путешествие по культуре Día de Muertos через коктейли!',
      p3: 'В каждом баре <strong class="green-highlight">вас ждут 2 авторских напитка</strong>. Пройдите <strong class="green-highlight">все 5 баров,</strong> <strong class="green-highlight">попробуйте 10 коктейлей</strong> и получите в награду <strong>limited мерч</strong> <strong class="green-highlight">BAR HOP</strong>.',
      wish: 'Не пуха, ни пера — и до встречи на маршруте!',
    },
    partner: {
      title: 'Дух древней Мексики',
      desc: 'Текила Olmeca рождается в сердце региона Халиско. Она несет в себе энергию солнца и традиции предков.',
    },
    bars: {
      title: 'Маршрут',
      where: 'Где:',
      when: 'Когда:',
      special: 'Спешл:',
      map_btn: 'Открыть в 2ГИС',
      address_tbd: 'Адрес уточняется',
      data: {
        juan: {
          name: 'Juan',
          description: 'Атмосферный кафе-бар с мексиканским настроением.',
          address: 'ул. Касыма Тыныстанова, 249',
          festivalSpecial: 'Коктейль в мексиканском стиле',
          workingHours: 'каждый день с 18:00 до 02:00',
        },
        riad: {
          name: 'Riad',
          description: 'Стильный бар с отличной коктейльной картой.',
          address: 'ул. Киевская улица, 203/2',
          festivalSpecial: 'Специальный напиток фестиваля',
          workingHours: 'с 18:00 до 02:00 кроме понедельника',
        },
        viking: {
          name: 'The Viking pub',
          description: 'Тематический паб с атмосферой северных воинов и широким выбором напитков.',
          address: 'ул. Киевская улица, 161',
          festivalSpecial: 'Викинг-спешл на базе текилы',
          workingHours: 'каждый день с 18:00 до 02:00',
        },
        blackwood: {
          name: 'BlackWood',
          description: 'Не только коктейли, но и кальяны.',
          address: 'ул. Токтогула, 110',
          festivalSpecial: 'Специальный напиток фестиваля',
          workingHours: 'с 18:00 до 03:00',
        },
        obshestvo: {
          name: 'Общество',
          description: 'Пришёл в один бар, а там их два!',
          address: 'ул. Жоомарта Боконбаева, 126/1',
          festivalSpecial: 'Авторский коктейль фестиваля',
          workingHours: 'ПН-ЧТ 18:00-01:45, ПТ-СБ 17:00-02:45, ВС 17:00-01:45',
        },
      },
    },
    footer: {
      quote: '«Конец — это всего лишь начало новой истории»',
      back_to_bars: 'К барам-участникам',
      warning: 'Чрезмерное употребление алкоголя вредит вашему здоровью',
    },
    common: {
      loading: 'Загрузка атмосферы...',
      error: 'Произошла ошибка при загрузке приложения. Пожалуйста, попробуйте открыть его в Telegram.',
      main_button: 'ПОСМОТРЕТЬ МАРШРУТ',
    },
  },
  en: {
    hero: {
      logo_sub: 'BARHOP 2026',
      title: 'Mexican Culture. Bar Culture. One Route.',
      description: 'Immerse yourself in the atmosphere of a Mexican holiday in the heart of Bishkek.',
      explore_btn: 'Explore Route',
    },
    story: {
      title: 'History of Dia de Muertos',
      p1: 'Dia de Muertos (Day of the Dead) is not just a holiday; it\'s a reflection of the Mexican spirit, where life and end go hand in hand, complementing each other.',
      h2: 'Life to the Fullest',
      p2: 'In Mexican tradition, the end is not considered an end. It is a transition, a reason for memory and respect for roots. Our barhop is inspired by this philosophy: valuing every moment, enjoying taste and communication.',
      h3: 'Culture and Memory',
      p3: 'We have brought together venues in Bishkek to create a unique route, where each bar tells its part of the story, and each cocktail becomes a tribute to tradition.',
    },
    conditions: {
      title: 'BAR HOP Conditions',
      p1: '¡Bienvenidos to the first <strong class="green-highlight">BAR HOP</strong> in Kyrgyzstan!',
      p2: 'Since you\'re here, it means you\'ve already visited one <strong class="green-highlight">of the 5 participating bars</strong>. Now it\'s time to embark on a little journey through Día de Muertos culture through cocktails!',
      p3: 'In each bar, <strong class="green-highlight">2 signature drinks await you</strong>. Visit <strong class="green-highlight">all 5 bars,</strong> <strong class="green-highlight">try 10 cocktails</strong> and receive a reward of <strong>limited</strong> <strong class="green-highlight">BAR HOP</strong> <strong>merch</strong>.',
      wish: 'Good luck, and see you on the route!',
    },
    partner: {
      title: 'The Spirit of Ancient Mexico',
      desc: 'Olmeca Tequila is born in the heart of the Jalisco region. It carries the energy of the sun and the traditions of ancestors.',
    },
    bars: {
      title: 'The Route',
      where: 'Where:',
      when: 'When:',
      special: 'Special:',
      map_btn: 'Open in 2GIS',
      address_tbd: 'Address to be confirmed',
      data: {
        juan: {
          name: 'Juan',
          description: 'Atmospheric cafe-bar with a Mexican mood.',
          address: '249 Kasym Tynystanov St',
          festivalSpecial: 'Mexican-style cocktail',
          workingHours: 'daily from 18:00 to 02:00',
        },
        riad: {
          name: 'Riad',
          description: 'Stylish bar with an excellent cocktail menu.',
          address: '203/2 Kievskaya St',
          festivalSpecial: 'Festival special drink',
          workingHours: '18:00 to 02:00 except Mondays',
        },
        viking: {
          name: 'The Viking pub',
          description: 'Themed pub with the atmosphere of northern warriors and a wide selection of drinks.',
          address: '161 Kievskaya St',
          festivalSpecial: 'Tequila-based Viking special',
          workingHours: 'daily from 18:00 to 02:00',
        },
        blackwood: {
          name: 'BlackWood',
          description: 'Not only cocktails, but also hookahs.',
          address: '110 Toktogul St',
          festivalSpecial: 'Festival special drink',
          workingHours: '18:00 to 03:00',
        },
        obshestvo: {
          name: 'Obshestvo (Society)',
          description: 'Came to one bar, and there are two of them!',
          address: '126/1 Joomart Bokonbaev St',
          festivalSpecial: 'Signature festival cocktail',
          workingHours: 'Mon-Thu 18:00-01:45, Fri-Sat 17:00-02:45, Sun 17:00-01:45',
        },
      },
    },
    footer: {
      quote: '“The end is just the beginning of a new story”',
      back_to_bars: 'To participating bars',
      warning: 'Excessive alcohol consumption is harmful to your health',
    },
    common: {
      loading: 'Loading atmosphere...',
      error: 'An error occurred while loading the application. Please try opening it in Telegram.',
      main_button: 'VIEW ROUTE',
    },
  },
};
