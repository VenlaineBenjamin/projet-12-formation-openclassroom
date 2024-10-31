import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center space-x-1">
            <p className="mr-1 font-body">{t("change_language_text")}</p>
            {i18n.language !== "fr" && (
                <button
                    onClick={() => changeLanguage("fr")}
                    className="flex items-center btn font-body"
                >
                    {t("fr")}
                </button>
            )}
            {i18n.language !== "en" && (
                <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center btn font-body"
                >
                    {t("en")}
                </button>
            )}
        </div>
    );
};

export default LanguageSwitcher;
