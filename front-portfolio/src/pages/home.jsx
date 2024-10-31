import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
    const { t } = useTranslation();
    return (
        <main>
            <h1 className="font-bold capitalize text-9xl bg-complementary font-title">
                benjamin Verlaine
            </h1>
            <h2 className="text-5xl font-title">{t("welcome")}</h2>
            <FaReact className="text-9xl text-secondary" />
            <LanguageSwitcher />
        </main>
    );
}
