import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import pdfCV from "../../public/Mon-nouveau-CV.pdf?url";

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

    // Désactive le défilement lorsque la modale est ouverte
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
                        <a
                            href={pdfCV}
                            download="cv-benjamin-verlaine"
                            className="flex items-center justify-center w-full max-w-xs text-center uppercase btn btn-neutral hover:bg-complementary/25"
                        >
                            <span>Curriculum Vitae</span>
                            <GrDocumentPdf className="ml-2" />
                        </a>
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
                <a
                    href={pdfCV}
                    download="cv-benjamin-verlaine"
                    className="flex items-center justify-center w-64 text-center uppercase btn btn-neutral hover:bg-complementary/25"
                >
                    <span>Curriculum Vitae</span>
                    <GrDocumentPdf className="ml-2" />
                </a>
            </nav>
        </div>
    );
}
