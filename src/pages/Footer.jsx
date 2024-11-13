import { useTranslation } from "react-i18next";
import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="flex justify-between h-full p-2 xl:px-4">
            <nav className="flex flex-col items-center justify-center xl:flex-row">
                <h2 className="items-center hidden font-bold text-left lg:flex text-md xl:text-4xl text-complementary font-title">
                    {t("find-me")}
                </h2>
                <div className="flex gap-2 ml-0 xl:ml-4 xl:gap-8">
                    {[
                        {
                            href: "https://www.linkedin.com/in/benjamin-verlaine-bb3314255/",
                            title: t("info-linkedin"),
                            icon: <FaLinkedin />,
                            color: "text-[#0A66C2]",
                        },
                        {
                            href: "https://github.com/VenlaineBenjamin",
                            title: t("info-github"),
                            icon: <FaGithubSquare />,
                            color: "text-[#010409]",
                        },
                        {
                            href: "https://dev.to/venlainebenjamin",
                            title: t("info-blog"),
                            icon: <FaDev />,
                            color: "text-black",
                        },
                    ].map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.title}
                            className={`tooltip flex items-center z-10 justify-center h-10 w-10 text-2xl xl:h-20 xl:w-20 xl:text-5xl rounded bg-primary hover:bg-secondary transition-colors duration-300 ${link.color}`}
                            data-tip={link.title}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </nav>
            <div className="flex flex-row items-center justify-center gap-2 xl:gap-4">
                <LanguageSwitcher />
                <ThemeSwitch />
            </div>
        </footer>
    );
}
