import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {i18n.language !== "fr" && (
                <div className="tooltip" data-tip={t("change-langue")}>
                    <button
                        onClick={() => changeLanguage("fr")}
                        className="text-xs btn-xs xl:btn-lg btn btn-primary font-body xl:text-md"
                    >
                        {t("fr")}
                    </button>
                </div>
            )}
            {i18n.language !== "en" && (
                <div className="tooltip" data-tip={t("change-langue")}>
                    <button
                        onClick={() => changeLanguage("en")}
                        className="text-xs btn-xs xl:btn-lg btn btn-primary font-body xl:text-md"
                    >
                        {t("en")}
                    </button>
                </div>
            )}
        </>
    );
};

export default LanguageSwitcher;
