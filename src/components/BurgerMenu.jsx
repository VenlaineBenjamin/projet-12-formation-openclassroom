import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function BurgerMenu() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `btn btn-neutral w-1/3 text-center ${
            isActive
                ? "bg-complementary font-bold hover:bg-complementary"
                : "hover:bg-complementary/25"
        }`;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-auto">
            {/* Icon for mobile menu toggle */}
            <div className="lg:hidden" onClick={toggleMenu}>
                {isOpen ? (
                    ""
                ) : (
                    <GiHamburgerMenu
                        size={36}
                        className="fixed text-white top-8 right-8"
                    />
                )}
            </div>

            {/* Full-screen sidebar for mobile view with opacity transition */}
            <div
                className={`fixed inset-0 h-screen w-full z-50 lg:hidden bg-white bg-opacity-50 backdrop-blur transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Menu content */}
                <div className="relative flex flex-col items-center justify-center h-full gap-4 font-nav">
                    <div className="absolute top-8 right-8">
                        <IoMdClose
                            size={36}
                            onClick={toggleMenu}
                            className="cursor-pointer"
                        />
                    </div>
                    <NavLink
                        to="/about"
                        className={navLinkClass}
                        onClick={toggleMenu}
                    >
                        {t("menu-prestation")}
                    </NavLink>
                    <NavLink
                        to="/project"
                        className={navLinkClass}
                        onClick={toggleMenu}
                    >
                        {t("menu-project")}
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={navLinkClass}
                        onClick={toggleMenu}
                    >
                        {t("menu-skills")}
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={navLinkClass}
                        onClick={toggleMenu}
                    >
                        {t("menu-contact")}
                    </NavLink>
                </div>
            </div>

            {/* Standard navigation for larger screens */}
            <nav className="justify-end hidden gap-4 mr-4 xl:flex font-nav">
                <NavLink to="/about" className={navLinkClass}>
                    {t("menu-prestation")}
                </NavLink>
                <NavLink to="/project" className={navLinkClass}>
                    {t("menu-project")}
                </NavLink>
                <NavLink to="/skills" className={navLinkClass}>
                    {t("menu-skills")}
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                    {t("menu-contact")}
                </NavLink>
            </nav>
        </div>
    );
}
