import { useTranslation } from "react-i18next";
import { FaDev, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            {/* Main Footer Container */}
            <footer className="flex justify-between h-full p-2 xl:px-4">
                {/* Navigation Links Section */}
                <nav className="flex flex-col items-center justify-center xl:flex-row">
                    {/* Heading for social links */}
                    <h2 className="items-center hidden font-bold text-left lg:flex text-md xl:text-4xl text-complementary font-title">
                        {t("find-me")}
                    </h2>
                    {/* Social media links */}
                    <div className="flex gap-2 ml-0 xl:ml-4 xl:gap-8">
                        {/* Map through the social media links */}
                        {[
                            {
                                href: "https://www.linkedin.com/in/benjamin-verlaine-bb3314255/",
                                title: t("info-linkedin"),
                                icon: <FaLinkedin />,
                                color: "text-[#0A66C2]", // LinkedIn blue color
                            },
                            {
                                href: "https://github.com/VenlaineBenjamin",
                                title: t("info-github"),
                                icon: <FaGithubSquare />,
                                color: "text-[#010409]", // GitHub black color
                            },
                            {
                                href: "https://dev.to/venlainebenjamin",
                                title: t("info-blog"),
                                icon: <FaDev />,
                                color: "text-black", // Dev.to color
                            },
                        ].map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.title}
                                aria-label={link.title} // SEO: Added for accessibility
                                className={`tooltip flex items-center z-10 justify-center h-10 w-10 text-2xl xl:h-20 xl:w-20 xl:text-5xl rounded bg-primary hover:bg-secondary transition-colors duration-300 ${link.color}`}
                                data-tip={link.title}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </nav>
                {/* Language and Theme switchers */}
                <div className="flex flex-row items-center justify-center gap-2 xl:gap-4">
                    <LanguageSwitcher />
                    <ThemeSwitch />
                </div>
            </footer>
            {/* Footer Disclaimer */}
            <div className="flex items-center justify-center bg-black">
                <p className="text-sm text-gray-200">
                    Benjamin Verlaine - © {new Date().getFullYear()} - version
                    alpha 1.3.2 -{" "}
                    <a
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/VenlaineBenjamin/projet-12-formation-openclassroom"
                        aria-label="Portfolio GitHub Repository"
                    >
                        Link to GitHub repository of the portfolio
                    </a>
                </p>
            </div>
        </>
    );
}
