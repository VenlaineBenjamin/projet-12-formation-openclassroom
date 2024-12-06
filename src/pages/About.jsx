import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import myPhoto from "../images/moi-au-bord-du-lac.webp";

export default function About() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center gap-6 my-10 xl:gap-10 xl:my-20">
            {/* Titre de bienvenue */}
            <h2 className="text-xl font-bold text-center xl:text-4xl font-title text-complementary">
                {t("welcome")}
            </h2>

            {/* Image avec une meilleure gestion des styles */}
            <img
                src={myPhoto}
                alt={t("alt-photo-about")}
                className="object-cover border-4 shadow-lg pointer-events-none rounded-xl avatar w-36 h-36 xl:h-72 xl:w-72 border-complementary"
            />

            {/* Citation avec icônes et texte */}
            <blockquote className="relative w-5/6 text-center xl:w-3/4 xl:text-2xl text-md font-body">
                <FaQuoteLeft
                    className="absolute pr-4 text-3xl text-complementary -top-4 left-4 xl:text-4xl"
                    aria-hidden="true"
                />
                <p className="px-6 xl:px-10">{t("presentation")}</p>
                <FaQuoteRight
                    className="absolute pl-4 text-3xl text-complementary -bottom-4 right-4 xl:text-4xl"
                    aria-hidden="true"
                />
            </blockquote>
        </main>
    );
}
