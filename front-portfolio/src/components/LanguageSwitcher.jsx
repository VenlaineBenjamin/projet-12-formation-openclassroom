import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const renderButton = (lang, tooltip, imageUrl) => (
        <div className="tooltip" data-tip={tooltip}>
            <button
                onClick={() => changeLanguage(lang)}
                aria-label={tooltip}
                className="text-sm bg-center bg-cover xl:text-xl w-28 h-14 xl:btn-lg btn font-body text-complementary"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {t(lang)}
            </button>
        </div>
    );

    return (
        <>
            {i18n.language !== "fr" &&
                renderButton(
                    "fr",
                    t("change-langue"),
                    "../../src/images/Flag_of_France.svg"
                )}
            {i18n.language !== "en" &&
                renderButton(
                    "en",
                    t("change-langue"),
                    "../../src/images/Flag_of_the_United_Kingdom.svg"
                )}
        </>
    );
};

export default LanguageSwitcher;
