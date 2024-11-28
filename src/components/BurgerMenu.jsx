import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import PdfDownloadButton from "./PdfDownload";

// Import du PDF

// Composant pour le bouton de téléchargement du PDF

// Composant principal du menu
export default function BurgerMenu() {
    const { t } = useTranslation();

    const navLinkClass = ({ isActive }) =>
        `btn btn-neutral uppercase text-center ${
            isActive
                ? "bg-complementary font-bold hover:bg-complementary"
                : "hover:bg-complementary/25"
        }`;

    // Fonction de fermeture de la modale
    const handleModalClose = () => {
        document.getElementById("my_modal_3").close();
    };

    const navLinks = [
        { path: "/project", label: t("menu-project") },
        { path: "/skills", label: t("menu-skills") },
        { path: "/contact", label: t("menu-contact") },
    ];

    // Désactiver le défilement lorsque la modale est ouverte
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
            <div className="lg:hidden">
                {/* Bouton pour ouvrir la modale */}
                <button
                    className="fixed text-white top-8 right-8"
                    onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                    }
                    aria-label="Menu"
                >
                    <GiHamburgerMenu size={36} />
                </button>
            </div>

            {/* Modale */}
            <dialog
                id="my_modal_3"
                className="modal"
                onClick={(e) => {
                    if (e.target === e.currentTarget) handleModalClose();
                }}
            >
                <div className="flex flex-col items-center justify-center pt-12 modal-box">
                    <form
                        method="dialog"
                        className="flex flex-col items-center justify-center w-full gap-4"
                    >
                        {/* Bouton pour fermer la modale */}
                        <button
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                            onClick={handleModalClose}
                        >
                            ✕
                        </button>
                        {/* Liens du menu */}
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
                        {/* Bouton de téléchargement du CV */}
                        <PdfDownloadButton />
                    </form>
                </div>
            </dialog>

            {/* Menu desktop */}
            <nav className="justify-end hidden gap-4 mr-4 xl:flex font-nav">
                {navLinks.map(({ path, label }) => (
                    <NavLink key={path} to={path} className={navLinkClass}>
                        {label}
                    </NavLink>
                ))}
                {/* Bouton de téléchargement du CV */}
                <PdfDownloadButton />
            </nav>
        </div>
    );
}
