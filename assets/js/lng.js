const en = {
    "lng": "EN",
    "welcome_message": "Welcome to Our Website!",
    "about_us": "Learn more about us...",
    "footer_text": "© 2023 All rights reserved."
}

const ru = {
    lng: "RU",
    pageServices: "Сервисы",
    pageGoods: "Изделия",
    pageEquipment: "Оборудование",
    pageShop: "Магазин",
    pageModeling: "Конструктор мебели",
    pageContact: "Контакты",
    pageEcoApp: "Эко суперапп",
    pageSubbotnik: "Цифровой субботник",
    pageRVM: "Пункты приема вторсырья",
    pageFurniture: "Мебель, освещение, декор",
    pageOutdoor: "Уличные решения",
    pageCustom: "3D печать на заказ",

    contactDescription: "Мы компания, которая создает технологии для раздельного сбора вторсырья и его переработки в новые товары. Мы помогаем жителям и бизнесу стать частью цикличной экономики.",
    contactIfoCaption: "Контакты",
    contactInfoDescription: "Мы на связи и готовы ответить на ваши вопросы. Пишите нам на почту или в мессенджеры.",
    contactFollow: "Cоцсети",

    mainTitle1: "Цикличная экономика в 3 шага",
    mainSubTitle1: "Вовлекаем жителей в раздельный сбор с помощью суперприложения, собираем вторсырье в инновационные фандоматы и печатаем товары из вторсырья с помощью наших крупноформатных 3D принтеров",

    mainTitle2: "Мы создаем инновации в области экологии",
    mainSubTitle2: "Более 5 лет мы помогаем жителям и бизнесу стать частью цикличной экономики. Мы разрабатываем программное обеспечение в области управления отходами, проектируем и производим крупноформатные 3D принтеры, ЧПУ станки и другое оборудование для переработки вторсырья. Наши пункты фандоматы принимают отходы у населения за вознаграждение по уникальной технологии.",
   
    mainTitle3: "Возвращаем вторсырье в экономику",
    mainSubTitle3: "Мы печатаем мебель, освещение, предметы интерьера, декор и уличные решения из вторсырья. Это позвляет сократить количество отходов, которые отправляются на полигоны и подарить вторсырью вторую жизнь. Вы можете купить как питовые изделия, напечатанные на нашем 3D принтере, так и заказать индивидуальную печать на нашем сайте. Мы также предлагаем услуги по 3D печати для бизнеса и частных лиц.",
    buttonDetails: "Подробнее",

    mainTitle4: "Нам доверяют крупные компании",

    mainVardanText: "Совместно с TrashBack мы реализовали цифровой сервис уборки парков и лесов для наших покупателей и получили положительную обратную связь - пользователи готовы гулять и помогать делать парки чище. К тому же это хороший инструмент лояльности - вы поощряете пользователей за полезные действия. Год назад наша компания также провела Цифровой субботник от TrashBack для сотрудников в рамках вовлечения коллег в ценность «Забота о себе и будущем»",
    mainVardanName: "Вардан Варданян",
    mainVardanPosition: "Лидер экологических проектов ВкусВилл",

    googlePlayLink:"https://play.google.com/store/apps/details?id=com.trashback.trashback",
    appStoreLink: "https://apps.apple.com/ru/app/trashback/id1481627273",
    ruStoreLink: "https://apps.rustore.ru/app/com.trashback.trashback",
    
    email: "mailto:info@trashback.net", 
    telegram: "https://t.me/trashback_net", 
    instagram: "https://www.instagram.com/trashback_net",
    youtube: "https://www.youtube.com/channel/UC_d8J05AN0-ThyoGfWW8S3g" ,
}



function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

async function fetchLanguageData(lang) {
    const response = await fetch(`/assets/translations/${lang}.json`);
    return response.json();
}

async function changeLanguage(lang) {
    //await setLanguagePreference(lang);
    
    const langData = lang == 'en' ? en : ru;
    updateContent(langData);
    //toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
}

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = userPreferredLanguage == 'en' ? en : ru;
    updateContent(langData);
});