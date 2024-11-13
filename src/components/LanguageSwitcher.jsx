import { useTranslation } from "react-i18next";
import flagFrance from "../images/Ensign_of_France.webp";
import flagUK from "../images/Flag_of_the_United_Kingdom.webp";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const renderButton = (lang, tooltip, imageUrl) => (
        <div className="z-10 tooltip" data-tip={tooltip}>
            <button
                onClick={() => changeLanguage(lang)}
                aria-label={tooltip}
                className="w-24 h-10 text-sm bg-center bg-cover xl:text-xl xl:btn-lg btn font-body text-complementary"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {t(lang)}
            </button>
        </div>
    );

    return (
        <>
            {i18n.language !== "fr" &&
                renderButton("fr", t("change-langue"), flagFrance)}
            {i18n.language !== "en" &&
                renderButton("en", t("change-langue"), flagUK)}
        </>
    );
};

export default LanguageSwitcher;
