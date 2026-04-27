const revealItems = document.querySelectorAll(".section, .hero, .coach-hero-block, .site-footer");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Language Selection Logic
const translations = {
  ua: {
    nav_programs: "Опис занять",
    nav_pricing: "Ціни",
    nav_coach: "Інструктор",
    nav_location: "Локація",
    nav_cta: "Записатися",
    hero_eyebrow: "Плавання для немовлят, дітей і дорослих у Варшаві",
    hero_title: "Ваш шлях до вільного плавання.",
    hero_lead: "Індивідуальні заняття з увагою до техніки та комфортним стартом для малюків і дорослих.",
    hero_insta: "Написати в Instagram",
    hero_prices: "Вартість Заняття",
    hero_p1: "Немовлята від 3 місяців до 2 років",
    hero_p2: "Діти від 2 до 14 років",
    hero_p3: "Дорослі: навчання та постановка стилів",
    hero_mini_story_label: "Підхід",
    hero_mini_story_text: "Кожне заняття має чітку ціль: адаптація, техніка, дихання. Без хаосу, без перевантаження, з увагою до відчуттів у воді.",
    coach_brand_mark: "Про",
    coach_brand_text: "інструктора",
    coach_name: "Наталія Вишинська",
    coach_role: "Інструктор з плавання",
    coach_p1: "Інструктор з плавання з понад 12 роками практики та змагального досвіду. Працює з дітьми й дорослими, допомагаючи опанувати техніку, подолати страх води та впевнено почуватися у басейні. Поєднує спортивний підхід, уважність і комфортну подачу матеріалу.",
    coach_p2: "Інструктор з плавання з понад 12 роками практики та змагального досвіду. Працює з дітьми й дорослими, допомагаючи опанувати техніку, подолати страх води та впевнено почуватися у басейні. Поєднує спортивний підхід, уважність і комфортну подачу матеріалу.",
    coach_cred_1: "Учасниця професійного семінару «Навчання дітей раннього віку» (2016)",
    coach_cred_2: "Диплом бакалавра зі спеціальності «Дошкільна освіта»",
    coach_cred_3: "Учасниця конференції для інструкторів Mania Pływania (2024)",
    coach_cred_4: "Кваліфікація «Legitymacja Instruktora» Польської Академії Тренерів Green Way (2024)",
    coach_cred_5: "Сертифікат «Instruktor Nauki Pływania Niemowląt» від Polska Akademia Trenerów i Instruktorów Sportu(2024)",
    coach_cred_6: "Учасниця конференції для інструкторів Mania Pływania (2025)",
    coach_insta: "Instagram",
    coach_fb: "Facebook",
    intro_eyebrow: "Для кого ці заняття",
    intro_title: "М’який старт для найменших. Сильна база для дорослих.",
    intro_baby_title: "Немовлята",
    intro_baby_desc: "Заняття для малюків від 3 місяців до 2 років з делікатною адаптацією до води.",
    intro_kids_title: "Діти",
    intro_kids_desc: "Розвиток навички плавання, координації, впевненості у воді та любові до руху.",
    intro_adults_title: "Дорослі",
    intro_adults_desc: "Навчання з нуля, постановка стилів плавання та спокійна робота над технікою.",
    prog_eyebrow: "Опис занять",
    prog_title: "Програми, побудовані під вік, рівень і ціль.",
    prog_baby_kicker: "Від 3 місяців до 2 років",
    prog_baby_title: "Плавання для немовлят",
    prog_baby_desc: "Перший контакт з водою через довіру, гру та м’яке знайомство з басейном. Заняття проходять у форматі, комфортному для дитини й дорослого.",
    prog_kids_kicker: "Від 2 до 14 років",
    prog_kids_title: "Дитячі заняття",
    prog_kids_desc: "Освоєння базових навичок, покращення координації, розвиток витривалості та впевненості у власних силах.",
    prog_adults_kicker: "Для дорослих",
    prog_adults_title: "Постановка стилів плавання",
    prog_adults_desc: "Техніка, ритм, дихання і комфорт у воді для тих, хто тільки починає або хоче плавати красивіше й легше.",
    promise_eyebrow: "Що ви отримаєте",
    promise_title: "Не просто тренування, а впевненість у воді для всієї родини.",
    promise_1_title: "Комфорт",
    promise_1_desc: "Спокійна атмосфера для знайомства з водою без тиску й поспіху.",
    promise_2_title: "Техніка",
    promise_2_desc: "Поступове формування правильних рухів, дихання та координації.",
    promise_3_title: "Упевненість",
    promise_3_desc: "Навичка, яка допомагає почуватися сильніше у воді та в повсякденному житті.",
    loc_eyebrow: "Локація",
    pack_eyebrow: "Що потрібно брати",
    pack_title: "Короткий список для комфортного відвідування басейну.",
    pack_note: "Якщо ви приходите з немовлям, обов’язково візьміть також змінне взуття для себе. Шапочки для плавання надаються.",
    pack_item_1: "Купальник або плавки",
    pack_item_2: "Плавальні підгузки для дітей до 3 років",
    pack_item_3: "Шапочка для плавання",
    pack_item_4: "Плавальні окуляри",
    pack_item_5: "Рушник або халат",
    pack_item_6: "Засоби для душу",
    pack_item_7: "Змінне взуття для басейну",
    price_eyebrow: "Вартість Занять",
    price_title: "Прозорий прайс без зайвих умов.",
    price_fb: "Написати у Facebook",
    price_1_kicker: "Індивідуальні заняття",
    price_1_title: "1 на 1",
    price_1_opt1: "99 zł / 30 хв",
    price_1_opt2: "129 zł / 45 хв",
    price_1_opt3: "159 zł / 60 хв",
    price_2_kicker: "Мінігрупа",
    price_2_title: "3-5 осіб",
    price_2_opt1: "65 zł / 30 хв",
    price_2_opt2: "Комфортний формат для дітей і дорослих",
    price_3_kicker: "Старт",
    price_3_title: "Разовий внесок",
    price_3_opt1: "40 zł",
    price_3_opt2: "Перший крок до регулярних занять",
    faq_eyebrow: "Поширені питання",
    faq_q1: "Чи можна почати з нуля?",
    faq_a1: "Так. Є окремий формат для тих, хто не плавав раніше або відчуває страх перед водою.",
    faq_q2: "Чи можуть батьки бути поруч із немовлятами?",
    faq_a2: "Так, формат занять для найменших передбачає спокійний супровід дорослого.",
    faq_q3: "Як обрати між індивідуальним і груповим заняттям?",
    faq_a3: "Індивідуальні сесії підходять для швидкого старту й точкової роботи, мінігрупи для регулярної практики.",
    footer_rights: "© 2026 Go Swimm. Всі права захищені."
  },
  pl: {
    nav_programs: "Opis zajęć",
    nav_pricing: "Ceny",
    nav_coach: "Instruktor",
    nav_location: "Lokalizacja",
    nav_cta: "Zapisz się",
    hero_eyebrow: "Pływanie dla niemowląt, dzieci i dorosłych w Warszawie",
    hero_title: "Twoja droga do swobodnego pływania.",
    hero_lead: "Indywidualne i grupowe zajęcia z łagodnym wsparciem, dbałością o technikę i komfortowym startem dla maluchów i dorosłych.",
    hero_insta: "Napisz na Instagramie",
    hero_prices: "Zobacz ceny",
    hero_p1: "Niemowlęta od 3 miesięcy do 2 lat",
    hero_p2: "Dzieci od 2 do 14 lat",
    hero_p3: "Dorośli: nauka i doskonalenie stylów",
    hero_mini_story_label: "Podejście Natali",
    hero_mini_story_text: "Każda lekcja ma jasny cel: adaptacja, technika, oddech. Bez chaosu, bez przeciążenia, z uwagą na odczucia w wodzie.",
    coach_brand_mark: "O",
    coach_brand_text: "instruktorze",
    coach_name: "Natalia Wyszyńska",
    coach_role: "Instruktor pływania",
    coach_p1: "Absolwentka Lwowskiego Uniwersytetu Narodowego im. Iwana Franki na kierunku wychowanie przedszkolne i wychowanie fizyczne.",
    coach_p2: "Za mną 12 lat intensywnych treningów pływackich, liczne nagrody i zwycięstwa w zawodach. W pracy łączy bazę sportową, uważność na dzieci i umiejętność spokojnego prowadzenia dorosłych od lęku przed wodą do pewnego ruchu.",
    coach_cred_1: "Uczestniczka seminarium zawodowego „Nauczanie dzieci we wczesnym wieku” (2016)",
    coach_cred_2: "Dyplom licencjata na kierunku „Edukacja przedszkolna”",
    coach_cred_3: "Uczestniczka konferencji dla instruktorów Mania Pływania (2024)",
    coach_cred_4: "Kwalifikacja „Legitymacja Instruktora” Polskiej Akademii Trenerów Green Way (2024)",
    coach_cred_5: "Certyfikat „Instruktor Nauki Pływania Niemowląt” od Polska Akademia Trenerów i Instruktorów Sportu Green Way (2024)",
    coach_cred_6: "Uczestniczka konferencji dla instruktorów Mania Pływania (2025)",
    coach_insta: "Instagram",
    coach_fb: "Facebook",
    intro_eyebrow: "Dla kogo są te zajęcia",
    intro_title: "Łagodny start dla najmłodszych. Silna baza dla dorosłych.",
    intro_baby_title: "Niemowlęta",
    intro_baby_desc: "Zajęcia dla maluchów od 3 miesięcy do 2 lat z delikatną adaptacją do wody.",
    intro_kids_title: "Dzieci",
    intro_kids_desc: "Rozwój umiejętności pływania, koordynacji, pewności w wodzie i zamiłowania do ruchu.",
    intro_adults_title: "Dorośli",
    intro_adults_desc: "Nauka od zera, doskonalenie stylów pływania i spokojna praca nad techniką.",
    prog_eyebrow: "Opis zajęć",
    prog_title: "Programy dostosowane do wieku, poziomu i celu.",
    prog_baby_kicker: "Od 3 miesięcy do 2 lat",
    prog_baby_title: "Pływanie dla niemowląt",
    prog_baby_desc: "Pierwszy kontakt z wodą poprzez zaufanie, zabawę i łagodne zapoznanie z basenem. Zajęcia odbywają się w formacie komfortowym dla dziecka i dorosłego.",
    prog_kids_kicker: "Od 2 do 14 lat",
    prog_kids_title: "Zajęcia dla dzieci",
    prog_kids_desc: "Opanowanie podstawowych umiejętności, poprawa koordynacji, rozwój wytrzymałości i pewności siebie.",
    prog_adults_kicker: "Dla dorosłych",
    prog_adults_title: "Doskonalenie stylów pływania",
    prog_adults_desc: "Technika, rytm, oddech i komfort w wodzie dla tych, którzy dopiero zaczynają lub chcą pływać ładniej i łatwiej.",
    promise_eyebrow: "Co zyskasz",
    promise_title: "Nie tylko trening, ale pewność w wodzie dla całej rodziny.",
    promise_1_title: "Komfort",
    promise_1_desc: "Spokojna atmosfera do zapoznania się z wodą bez presji i pośpiechu.",
    promise_2_title: "Technika",
    promise_2_desc: "Stopniowe kształtowanie prawidłowych ruchów, oddechu i koordynacji.",
    promise_3_title: "Pewność siebie",
    promise_3_desc: "Umiejętność, która pomaga czuć się pewniej w wodzie i w życiu codziennym.",
    loc_eyebrow: "Lokalizacja",
    pack_eyebrow: "Co zabrać ze sobą",
    pack_title: "Krótka lista rzeczy potrzebnych na basen.",
    pack_note: "Jeśli przychodzisz z niemowlęciem, pamiętaj o obuwiu zmiennym dla siebie. Czepki pływackie są zapewnione.",
    pack_item_1: "Strój kąpielowy lub kąpielówki",
    pack_item_2: "Pieluchy do pływania dla dzieci do 3 lat",
    pack_item_3: "Czepek pływacki",
    pack_item_4: "Okulary pływackie",
    pack_item_5: "Ręcznik lub szlafrok",
    pack_item_6: "Kosmetyki pod prysznic",
    pack_item_7: "Obuwie zmienne na basen",
    price_eyebrow: "Cena",
    price_title: "Przejrzysty cennik bez dodatkowych warunków.",
    price_fb: "Napisz na Facebooku",
    price_1_kicker: "Zajęcia indywidualne",
    price_1_title: "1 na 1",
    price_1_opt1: "99 zł / 30 min",
    price_1_opt2: "129 zł / 45 min",
    price_1_opt3: "159 zł / 60 min",
    price_2_kicker: "Minigrupa",
    price_2_title: "3-5 osób",
    price_2_opt1: "65 zł / 30 min",
    price_2_opt2: "Komfortowy format dla dzieci i dorosłych",
    price_3_kicker: "Start",
    price_3_title: "Opłata jednorazowa",
    price_3_opt1: "40 zł",
    price_3_opt2: "Pierwszy krok do regularnych zajęć",
    faq_eyebrow: "Często zadawane pytania",
    faq_q1: "Czy można zacząć od zera?",
    faq_a1: "Tak. Istnieje oddzielny format dla osób, które wcześniej nie pływały lub odczuwają lęk przed wodą.",
    faq_q2: "Czy rodzice mogą być obecni przy niemowlętach?",
    faq_a2: "Tak, format zajęć dla najmłodszych przewiduje spokojną opiekę osoby dorosłej.",
    faq_q3: "Jak wybrać między zajęciami indywidualnymi a grupowymi?",
    faq_a3: "Sesje indywidualne są idealne na szybki start i precyzyjną pracę, minigrupy na regularną praktykę.",
    footer_rights: "© 2026 Go Swimm. Wszelkie prawa zastrzeżone."
  }
};

function updateLanguage(lang) {
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const langModal = document.getElementById("langModal");
  const langButtons = document.querySelectorAll(".lang-select-btn");

  setTimeout(() => {
    langModal.classList.add("is-visible");
  }, 300);

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      updateLanguage(selectedLang);
      langModal.classList.remove("is-visible");
      localStorage.setItem("selectedLanguage", selectedLang);
    });
  });

  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang) {
    updateLanguage(savedLang);
  }

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
});

// Mobile CTA Slider Toggle
const ctaTrigger = document.getElementById("ctaSliderTrigger");
const ctaWrapper = document.getElementById("navCtaWrapper");

if (ctaTrigger && ctaWrapper) {
  ctaTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    ctaWrapper.classList.toggle("is-open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (ctaWrapper.classList.contains("is-open") && !ctaWrapper.contains(e.target)) {
      ctaWrapper.classList.remove("is-open");
    }
  });

  // Close when clicking the link itself
  const ctaLink = ctaWrapper.querySelector(".nav-cta");
  if (ctaLink) {
    ctaLink.addEventListener("click", () => {
      ctaWrapper.classList.remove("is-open");
    });
  }
}
