import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import myImage from "../images/ma-photo1.webp";

// Header component with navigation and branding
export default function Header() {
    const { t } = useTranslation(); // Hook for i18n translations

    return (
        <header className="flex justify-between items-center h-24 xl:h-32 drop-shadow-xl z-[100]">
            {/* Link to redirect to the homepage */}
            <Link to="/" className="flex items-center">
                {/* Personal image */}
                <img
                    src={myImage}
                    alt={t("alt-photo")} // Accessible alternative text
                    className="hidden h-24 pointer-events-none xl:h-32 md:block"
                />

                {/* Branding: Name and title */}
                <div className="flex flex-col justify-center ml-4">
                    {/* Name with animated gradient */}
                    <h1
                        className="pb-1 text-3xl font-bold text-transparent xl:text-6xl font-title bg-gradient-to-r from-orange-700 via-yellow-500 to-green-400 bg-clip-text animate-gradient"
                        role="heading"
                        aria-level="1"
                    >
                        {t("my-name")}
                    </h1>

                    {/* Subtitle / profession */}
                    <h2
                        className="text-md xl:text-2xl font-title"
                        role="heading"
                        aria-level="2"
                    >
                        {t("title")}
                    </h2>
                </div>
            </Link>

            {/* Mobile navigation menu */}
            <BurgerMenu />
        </header>
    );
}
