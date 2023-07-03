const snippets = [
  `
  const radio = document.querySelectorAll('.x0k1lc');
  const multi = document.querySelectorAll(".Yri8Nb");
  const next = document.querySelectorAll('.NPEfkd');
  const form = document.querySelector('form');
  const offer = document.querySelectorAll('.ajBQVb'); //48 -yes 49 -no // NOT USED

  const museums = ['Государственная Третьяковская галерея', 'ГМИИ им. А.С.Пушкина', 'Музейно-выставочное объединение "Манеж"', 'Музей Победы', 'Музеи Московского Кремля', 'Музейное объединение «Музей Москвы»', 'Государственный исторический музей', 'Московский музей современного искусства', 'Музей современного искусства "Гараж"', 'Дарвиновский музей', 'Музейный город ВДНХ'];
  const lectoriums = ['Лекционная программа музея «Гараж»', 'Образовательный центр Еврейского музея и центра толерантности', 'Лекторий Библиотеки им. Н. А.Некрасова', 'Образовательный проект "Знание. ВДНХ"', 'Образовательные программы Парка Горького', 'Лекторий Пушкинского музея', 'Лекторий ГЭС-2', 'Лекторий Музея Москвы', 'Лекторий Культурного центра ЗИЛ', 'Лекторий Культурного центра Андрея Вознесенского'];
  const enjoyments = ['Остров мечты', 'ВДНХ', 'Beгac', 'Замания', 'Кидзания'];
  const sports = ['Лужники', 'Локальная спорт площадка', 'Динамо', 'ВДНХ', 'Олимпийский'];
  const parks = ['Парк "Сокольники"', 'Парк Горького', 'Парк "Красная Пресня"', 'Парк "Зарядье"', 'ВДНХ', 'Сад "Эрмитаж"', 'Измайловский парк', 'Сад имени Баумана', 'Парк победы на Поклонной горе', 'Парк "Царицыно"'];
  const food = ['Центральный рынок', 'Даниловский рынок', 'Зарядье'];

  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true
  });

  async function runSequentially() {
    await multiclick();
    await radioclick();
    await singleclick();
    await fillAreas();
    await send();
  }

  async function multiclick() {
    multi.forEach((el) => {
      const randomIndex = Math.floor(Math.random() * multi.length);
      const randomElement = multi[randomIndex];

      randomElement.dispatchEvent(clickEvent);
    });

  }

  async function radioclick() {
    radio.forEach((el, index) => {
      if (index >= 24) {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * radio.length);
        } while (randomIndex <= 24);

        const randomElement = radio[randomIndex];
        randomElement.dispatchEvent(clickEvent);
      }
    });
  }

  async function singleclick() {
    radio[Math.random() < 0.5? 2 : 3].dispatchEvent(clickEvent); // 0 -msk; 1 -mskobl; 2 - spb; 3 -spbobl; 4 -ufo; 5 -volga;
    radio[Math.random() < 0.38? 7 : 8].dispatchEvent(clickEvent); // 7 -man; 8 -woman;
    radio[11].dispatchEvent(clickEvent); // 9 -16-19age; 10 -20-24age; 11 -25-44age; 12 -45-50age; 13 >50age;
    radio[17].dispatchEvent(clickEvent); // 14 -yes < 3; 15 -yes 3 - 15; 16 -yes > 15; 17 -no;
    radio[Math.random() < 0.48? 20 : 21].dispatchEvent(clickEvent); // 18 -pensioner; 19 -student; 20 -home; 21 -boss;
    radio[24].dispatchEvent(clickEvent); // 22 - < 20k; 23 -20k - 62.5k; 24 - > 62.5k;
  }

  async function fillAreas() {
    const entries = form.firstChild.querySelectorAll('input');
    entries[0].value = museums[Math.floor(Math.random() * museums.length)]; // museums
    entries[1].value = lectoriums[Math.floor(Math.random() * lectoriums.length)] // lectoriums
    entries[2].value = enjoyments[Math.floor(Math.random() * enjoyments.length)] // enjoyment complexes
    entries[3].value = sports[Math.floor(Math.random() * sports.length)] // sport spaces
    entries[4].value = parks[Math.floor(Math.random() * parks.length)] // parks
    entries[5].value = food[Math.floor(Math.random() * food.length)] // foods
    entries[6].value = 'Номер не указан' // contacts
  }

  async function send() {
    setTimeout(function () {
      // next[29].dispatchEvent(clickEvent);
    }, 100);
  }

  runSequentially();
  `,
    `
    const dict = {
    switch: ['Georgian', 'English'],
    coworking: ['coworking', 'თანამშრომლობა'],
    about: ['About', 'შესახებ'],
    partners: ['Partners', 'პარტნიორები'],
    event: ['Event', 'ღონისძიებები'],
    contact: ['Contact', 'საკონტაქტო'],
    mainH1: ['Coworking space', 'სივრცე თანამშრომლ ობისთვის'],
    description: ['We work for your convenience, so we need your help in development! Your donations will be used for business development and purchase of necessary equipment.', 'ვმუშაობთ თქვენი კომფორტისთვის, ამიტომაც გვესაჭიროება თქვენივე დახმარება  განვითარებისთვის. თქვენი ფინანსური მხარდაჭერა გამოყენებული იქნება ბიზნესის განვითარებასა და საჭირო ინვენტარის შესყიდვისთვის.'],
    beel: ['Beel your place', 'დაჯავშნეთ თქვენი ადგილი'],
    reservation: ['Reservation', 'დაჯავშნა'],
    aboutH1: ['About coworking', 'თანამშრომლობის შესახებ'],
    aboutDescription1: ['We welcome you in our co-working space. Use our rooms and our tech support to develop and grow your business. We have special offers for those starting their business in Kutaisi.', 'გიწვევთ სათანამშრომლოდ ჩვენს სივრცეში, სადაც შეგეძლებათ ჩვენი ოთახები და ტექნიკა გამოიყენოთ ბიზნესის განვითარებისთვის. განსაკუთრებული შეთავაზება გვაქვს მათთვის ვინც ბიზნესს იწყებს ქუთაისში.'],
    aboutDescription2: ['We create comfortable and private environment, so that you can spend your time with the maximum efficiency. Cosy recreation zones and closed working spaces allow spending less energy during working day.', 'ჩვენ ვქმნით კომფორტულ პირად სივრცეს, სადაც შეგეძლებათ გამოიყენოთ დრო ნაყოფიერად. მყუდრო რეკრეაციული ზონები და დახურული სამუშაო გარემო საშუალებას მოგცემთ დახარჯოთ ნაკლები ენერგია სამუშაო დღის განმავლობაში.'],
    concept: ['Concept', 'შინაარსი'],
    conceptDescription: ['We are here for you, your office, and your business. Our tech support can set live streaming, online meetings, etc. for you.', 'აქ ვართ თქვენთვის, თქვენი ოფისისა და ბიზნესისთვის. ჩვენი ტექნიკა შეგიძლიათ გამოიყენოთ პირდაპირი ტრანსლაციებისთვის, ონლაინ შეხვედრებისთვის და ა.შ'],
    desks: ['Desks', 'მაგიდები'],
    flexDesks: ['Flex desk: 21 Private room: 2', 'კომფორტული მაგიდა: 21 კერძო ოთახი: 2'],
    prices: ['Prices', 'ფასები'],
    priceAll: ['3 GEL / hour (minimum 3 hours) 20 GEL / day 300 GEl / month', '3 ლარი / საათი(მინიმუმ 3 საათი) 20 ლარი / დღე 300 ლარი / თვე'],
    price1: ['3 GEL / hour(minimum 3 hours)', '3 ლარი / საათი(მინიმუმ 3 საათი)'],
    price2: ['20 GEL / day', '20 ლარი / დღე'],
    price3: ['300 GEL / month', '300 ლარი / თვე'],
    adress: ['Address', 'მისამართი'],
    adressStreet: ['Jacob Gogebashvili st 33, Kutaisi', 'იაკობ გოგებაშვილის ქუჩა 33, ქუთაისი'],
    galleryTable: ['Flex desks', 'კომფორტული მაგიდები'],
    galleryTableCount: ['14 table', '14 მაგიდა'],
    galleryRoom: ['Meeting room', 'საკონფერენციო ოთახი'],
    galleryRoomCount: ['2 room', '2 ოთახი'],
    gallerySeatsCount: ['12 seats', '12 ადამიანი'],
    galleyEventCount: ['3+ event every week', '3+ ღონისძიება ყოველ კვირას'],
    galleryOther: ['Other idea', 'სხვა იდეები'],
    galleryOffer: ['You can offer us cooperation', 'შეგიძლიათ შემოგვთავაზოთ თანამშრომლობა'],
    contact: ['Contact', 'კონტაქტი'],
    overviewH1: ['Overview', 'მიმოხილვა'],
    overviewLocation: ['Central location and spacious courtyard', 'ცენტრალური ადგილმდებარეობა და ფართო შიდა ეზო'],
    overviewWifi: ['Free high - speed wi - fi', 'უფასო, მაღალი სიჩქარის ვაი–ფაი'],
    overviewChairs: ['Ergonomic chairs', 'კომფორტული სკამები'],
    overviewEquipment: ['Full technical equipment', 'სრული ტექნიკური აღჭურვილობა'],
    overviewEvents: ['Regular events and seminars', 'მუდმივი ღონისძიებები და სემინარები'],
    overviewZones: ['3 аutonomous zones for work', '3 ცალკეული სივრცე სამუშაოდ'],
    eventsH1: ['Events', 'ღონისძიებები'],
    reviewsH1: ['Reviews', 'მიმოხილვები'],
    privacy: ['Privacy policy', 'კონფიდენციალურობის პოლიტიკა'],
    author: ['2023 by YEEL studio', '2023 ილ სტუდიის მიერ'],
  }

  const languageElement = document.querySelector('.language');
  const modalLangButtons = document.querySelectorAll('.lang-button');
  let selectedLanguage = localStorage.getItem('selectedLanguage');

  if (selectedLanguage === null) {
    selectedLanguage = 0; // EN default
  } else {
    selectedLanguage = parseInt(selectedLanguage);
  }

  function langChanger(sw) {
    const langClasses = document.querySelectorAll('.lang');
    langClasses.forEach((lang) => {
      const key = lang.classList[2].split('_')[0];
      const targetTag = document.querySelectorAll('.' + lang.classList[2]);
      targetTag.forEach(el => el.innerText = dict[key][sw]);
    });

    const headers = document.querySelectorAll('h1');
    const modalMenuButtons = document.querySelectorAll('.menu-item');
    const beelBtn = document.querySelectorAll('.beel_lang');

    if (sw === 1) {
      modalLangButtons[1].classList.add('selected-lang');
      modalLangButtons[0].classList.remove('selected-lang');

      if (window.outerWidth &lt; 500) {
        headers.forEach(h1 => h1.style.fontSize = '50px');
        modalMenuButtons.forEach(mb => mb.style.fontSize = '50px');
        beelBtn.forEach(btn => btn.style.width = '300px')
      } else {
        headers.forEach(h1 => h1.style.fontSize = '80px');
        modalMenuButtons.forEach(mb => mb.style.fontSize = '60px');
      }
    } else {
      modalLangButtons[0].classList.add('selected-lang');
      modalLangButtons[1].classList.remove('selected-lang');
      beelBtn.forEach(btn => btn.style.width = '250px')

      headers.forEach(h1 => h1.style.fontSize = '');
      modalMenuButtons.forEach(mb => mb.style.fontSize = '');
    }

    localStorage.setItem('selectedLanguage', sw);
  }

  langChanger(selectedLanguage);

  languageElement.addEventListener('click', () => {
    selectedLanguage = selectedLanguage === 0 ? 1 : 0;
    langChanger(selectedLanguage);
  });

  modalLangButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(button);
      if (button.id === 'EN') {
        langChanger(0);
      }
      if (button.id === 'GEO') {
        langChanger(1);
      }
    })
  });
  `
];


document.querySelectorAll('.snippet-code').forEach((el, i) => el.innerHTML = snippets[i]);