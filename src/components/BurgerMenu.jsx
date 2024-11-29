import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import PdfDownloadButton from "./PdfDownload";

// BurgerMenu component: handles responsive navigation with a modal for mobile screens
export default function BurgerMenu() {
    const { t } = useTranslation();

    // Utility function to apply dynamic classes to navigation links
    const navLinkClass = ({ isActive }) =>
        `btn btn-neutral uppercase text-center ${
            isActive
                ? "bg-complementary font-bold hover:bg-complementary"
                : "hover:bg-complementary/25"
        }`;

    // Function to close the modal
    const handleModalClose = () => {
        document.getElementById("my_modal_3").close();
    };

    // Define navigation links
    const navLinks = [
        { path: "/project", label: t("menu-project") },
        { path: "/skills", label: t("menu-skills") },
        { path: "/contact", label: t("menu-contact") },
    ];

    // Prevent body scrolling when the modal is open
    useEffect(() => {
        const modal = document.getElementById("my_modal_3");

        const handleOpen = () => {
            document.body.style.overflow = "hidden";
        };

        const handleClose = () => {
            document.body.style.overflow = "auto";
        };

        modal?.addEventListener("show", handleOpen);
        modal?.addEventListener("close", handleClose);

        return () => {
            document.body.style.overflow = "auto";
            modal?.removeEventListener("show", handleOpen);
            modal?.removeEventListener("close", handleClose);
        };
    }, []);

    return (
        <div className="my-auto">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button
                    className="fixed text-white top-8 right-8"
                    onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                    }
                    aria-label={t("aria-menu-open")} // Accessible label for screen readers
                >
                    <GiHamburgerMenu size={36} />
                </button>
            </div>

            {/* Mobile Modal */}
            <dialog
                id="my_modal_3"
                className="modal"
                onClick={(e) => {
                    if (e.target === e.currentTarget) handleModalClose();
                }}
                aria-label={t("aria-menu-modal")} // Accessible label for the modal
            >
                <div className="flex flex-col items-center justify-center pt-12 modal-box">
                    <form
                        method="dialog"
                        className="flex flex-col items-center justify-center w-full gap-4"
                    >
                        {/* Close Button */}
                        <button
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                            onClick={handleModalClose}
                            aria-label={t("aria-menu-close")} // Accessible label
                        >
                            ✕
                        </button>

                        {/* Navigation Links */}
                        {navLinks.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `${navLinkClass({
                                        isActive,
                                    })} flex items-center justify-center w-full max-w-xs`
                                }
                                onClick={handleModalClose}
                            >
                                {label}
                            </NavLink>
                        ))}

                        {/* PDF Download Button */}
                        <PdfDownloadButton />
                    </form>
                </div>
            </dialog>

            {/* Desktop Navigation */}
            <nav className="justify-end hidden gap-4 mr-4 xl:flex font-nav">
                {navLinks.map(({ path, label }) => (
                    <NavLink key={path} to={path} className={navLinkClass}>
                        {label}
                    </NavLink>
                ))}

                {/* PDF Download Button */}
                <PdfDownloadButton />
            </nav>
        </div>
    );
}
