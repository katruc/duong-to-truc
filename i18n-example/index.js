const resources = {
  vi: {
    translation: {
      welcome_message: "Chào mừng bạn đến với trang web của chúng tôi!",
      about_us: "Về chúng tôi",
      contact_us: "Liên hệ",
    },
  },
  en: {
    translation: {
      welcome_message: "Welcome to our website!",
      about_us: "About Us",
      contact_us: "Contact Us",
    },
  },
};

function changeLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    if (err) return console.log("Error loading translation files:", err);
    updateContent();
  });
}

function updateContent() {
  let elements = document.getElementsByClassName("i18n");

  for (const element of elements) {
    document.getElementById(element.id).innerText = i18next.t(element.id);
  }
}

i18next.init({
  lng: "vi",
  resources,
});

updateContent();
