import { useTranslation } from "react-i18next";
import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="flex justify-between h-full px-8">
            <nav className="flex flex-row items-center justify-center flex-grow gap-8">
                <a
                    href="https://www.linkedin.com/in/benjamin-verlaine-bb3314255/"
                    target="_blank"
                    title={t("info-linkedin")}
                    className="flex items-center justify-center text-2xl xl:text-5xl h-10 w-10 xl:h-20 xl:w-20 bg-primary text-[#0A66C2]"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/VenlaineBenjamin"
                    target="_blank"
                    title={t("info-github")}
                    className="flex items-center justify-center text-2xl xl:text-5xl h-10 w-10 xl:h-20 xl:w-20 bg-primary text-[#010409]"
                >
                    <FaGithubSquare />
                </a>
                <a
                    href="https://dev.to/venlainebenjamin"
                    target="_blank"
                    title={t("info-blog")}
                    className="flex items-center justify-center w-10 h-10 text-2xl text-black xl:text-5xl xl:h-20 xl:w-20 bg-primary"
                >
                    <FaDev />
                </a>
            </nav>
            <div className="flex flex-col items-center justify-center xl:flex-row xl:gap-4">
                <LanguageSwitcher />
                <ThemeSwitch />
            </div>
        </footer>
    );
}
