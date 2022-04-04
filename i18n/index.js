var en = require("./translations.en.json");
var fa = require("./translations.fa.json");

const i18n = {
  translations: {
    en: en.i18n,
    fa: fa.i18n,
  },
  defaultLang: "fa",
};

module.exports = i18n;
