import { useTranslation } from "react-i18next";
import flagFrance from "../images/Ensign_of_France.webp";
import flagUK from "../images/Flag_of_the_United_Kingdom.webp";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    // Change the language based on user selection
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Render language button with flag and tooltip
    const renderButton = (lang, tooltip, imageUrl) => (
        <div className="z-10 tooltip" data-tip={tooltip}>
            <button
                onClick={() => changeLanguage(lang)}
                aria-label={tooltip} // Accessibility improvement for screen readers
                className="w-24 h-10 text-sm bg-center bg-cover xl:text-xl xl:btn-lg btn font-body text-complementary"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {t(lang)} {/* Display the language name */}
            </button>
        </div>
    );

    return (
        <>
            {/* Show French flag button if the current language is not French */}
            {i18n.language !== "fr" &&
                renderButton("fr", t("change-langue"), flagFrance)}

            {/* Show English flag button if the current language is not English */}
            {i18n.language !== "en" &&
                renderButton("en", t("change-langue"), flagUK)}
        </>
    );
};

export default LanguageSwitcher;
