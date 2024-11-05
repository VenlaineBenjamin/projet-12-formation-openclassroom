import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
    const { t } = useTranslation();
    return (
        <header className="flex justify-between shadow-lg">
            <div className="flex">
                <img
                    src="../../src/images/ma-photo1.webp"
                    alt="photo de benjamin verlaine"
                    className="h-24 xl:h-32"
                />
                <div className="flex flex-col justify-center ml-4">
                    <h1 className="font-bold text-md xl:text-6xl font-title animate-fade-down">
                        Benjamin Verlaine
                    </h1>
                    <h2 className="text-xs xl:text-xl font-title">
                        {t("title")}
                    </h2>
                </div>
            </div>
            <nav className="flex self-center gap-4 mr-8 font-nav">
                <Link to="/about" className="btn btn-neutral">
                    {t("menu-prestation")}
                </Link>
                <Link to="/project" className="btn btn-neutral">
                    {t("menu-project")}
                </Link>
                <Link to="/skills" className="btn btn-neutral">
                    {t("menu-skills")}
                </Link>
                <Link to="/contact" className="btn btn-neutral">
                    contact
                </Link>
            </nav>
        </header>
    );
}
