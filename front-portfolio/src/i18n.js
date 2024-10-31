// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

i18n.use(initReactI18next).init({
    resources: {
        fr: { translation: frTranslation },
        en: { translation: enTranslation },
    },
    lng: "fr", // Langue par défau
    fallbackLng: "en", // Langue de repli
    interpolation: {
        escapeValue: false, // React gère déjà l'échappement des valeurs
    },
});

export default i18n;
