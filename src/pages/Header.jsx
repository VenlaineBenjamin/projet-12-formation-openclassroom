import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BurgerMenu from "../components/BurgerMenu";
import myImage from "../images/ma-photo1.webp";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="flex justify-between drop-shadow-lg">
            <Link to="/" className="flex">
                <img
                    src={myImage}
                    alt="photo de benjamin verlaine"
                    className="h-24 xl:h-32"
                />
                <div className="flex flex-col justify-center ml-4">
                    <h1 className="text-xl font-bold xl:text-6xl font-title">
                        {t("my-name")}
                    </h1>
                    <h2 className="text-xs xl:text-xl font-title">
                        {t("title")}
                    </h2>
                </div>
            </Link>
            <BurgerMenu />
        </header>
    );
}
