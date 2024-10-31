// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
                // Ajoute ici tes traductions en français
                welcome: "Bienvenue sur le portfolio de Benjamin Verlaine",
                about: "À propos",
                // Ajoute d'autres traductions au besoin
            },
        },
        en: {
            translation: {
                welcome: "Welcome to my portfolio of Benjamin Verlaine",
                about: "About",
                // Ajoute d'autres traductions au besoin
            },
        },
    },
    lng: "fr", // langue par défaut
    fallbackLng: "fr", // langue de repli
    interpolation: {
        escapeValue: false, // React échappe déjà les valeurs
    },
});

export default i18n;
