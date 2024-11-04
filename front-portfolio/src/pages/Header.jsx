import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="flex flex-row justify-between">
            <div className="flex flex-row bg-primary" data-theme="corporate">
                <img
                    src="../../src/images/ma-photo1.webp"
                    alt="photo de benjamin verlaine"
                    className="h-24 xl:h-32"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-md xl:text-4xl font-title">
                        Benjamin Verlaine
                    </h1>
                    <h2 className="text-xs font-title xl:text-xl">
                        {t("title")}
                    </h2>
                </div>
            </div>
            <nav className="self-center mr-8 font-nav btn btn-primary">
                <Link to="/about">{t("menu-prestation")}</Link>
            </nav>
        </header>
    );
}
