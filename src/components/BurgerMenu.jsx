import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import pdfCV from "../../public/C.V.verlaine-benjamin-verlaine-développeur-web.pdf";

export default function BurgerMenu() {
    const { t } = useTranslation();

    const navLinkClass = ({ isActive }) =>
        `btn btn-neutral uppercase w-1/3 text-center ${
            isActive
                ? "bg-complementary font-bold hover:bg-complementary"
                : "hover:bg-complementary/25"
        }`;

    // Fonction de fermeture de la modale
    const handleModalClose = () => {
        document.getElementById("my_modal_3").close();
    };

    // Désactive le défilement lorsque la modale est ouverte
    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
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
                >
                    <GiHamburgerMenu size={36} />
                </button>
            </div>

            {/* Modale */}
            <dialog
                id="my_modal_3"
                className="modal"
                onClick={(e) => {
                    // Vérifie si l'élément cliqué est bien en dehors de la modale
                    if (e.target === e.currentTarget) {
                        handleModalClose(); // Appel de la fonction handleModalClose
                    }
                }}
            >
                <div className="flex flex-col items-center justify-center modal-box">
                    <form
                        method="dialog"
                        className="flex flex-col items-center justify-center gap-4"
                    >
                        {/* Bouton pour fermer la modale */}
                        <button
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                            onClick={handleModalClose} // Utilisation de handleModalClose
                        >
                            ✕
                        </button>
                        {/* Liens du menu avec l'effet isActive */}
                        <NavLink
                            to="/project"
                            className={({ isActive }) =>
                                `${navLinkClass({ isActive })} w-64`
                            } // largeur définie à 16rem (256px)
                            onClick={handleModalClose} // Ferme la modale après le clic
                        >
                            {t("menu-project")}
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                `${navLinkClass({ isActive })} w-64`
                            } // largeur définie à 16rem (256px)
                            onClick={handleModalClose} // Ferme la modale après le clic
                        >
                            {t("menu-skills")}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `${navLinkClass({ isActive })} w-64`
                            } // largeur définie à 16rem (256px)
                            onClick={handleModalClose} // Ferme la modale après le clic
                        >
                            {t("menu-contact")}
                        </NavLink>
                        <a
                            href={pdfCV}
                            download="cv-benjamin-verlaine"
                            className="flex flex-row items-center justify-center w-64 gap-2 text-center uppercase btn btn-neutral hover:bg-complementary/25"
                        >
                            Curriculum Vitae
                        </a>
                    </form>
                </div>
            </dialog>

            {/* Menu desktop */}
            <nav className="justify-end hidden gap-4 mr-4 xl:flex font-nav">
                <NavLink to="/project" className={navLinkClass}>
                    {t("menu-project")}
                </NavLink>
                <NavLink to="/skills" className={navLinkClass}>
                    {t("menu-skills")}
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                    {t("menu-contact")}
                </NavLink>
                <a
                    href={pdfCV}
                    download="cv-benjamin-verlaine"
                    className="flex items-center justify-center w-1/3 text-center uppercase btn btn-neutral hover:bg-complementary/25"
                >
                    Curriculum Vitae
                </a>
            </nav>
        </div>
    );
}
