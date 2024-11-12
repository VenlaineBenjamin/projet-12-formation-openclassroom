import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import imgBooki from "../images/Capture-booki.webp";
import imgKasa from "../images/Capture-kasa.webp";
import imgNina from "../images/Capture-nina-carducci.webp";
import imgOhmyfood from "../images/Capture-ohmyfood.webp";

export default function Project() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            imgSrc: imgBooki,
            imgAlt: "Booki",
            title: "Booki",
            description: t("card-booki"),
            siteUrl: "https://ohmyfood-benjamin-verlaine.netlify.app/",
        },
        {
            imgSrc: imgKasa,
            imgAlt: "Kasa",
            title: "Kasa",
            description: t("card-kasa"),
            siteUrl: "https://verlaine-benjamin-kasa.netlify.app/",
        },
        {
            imgSrc: imgNina,
            imgAlt: "Nina Carducci",
            title: "Nina Carducci",
            description: t("card-nina"),
            siteUrl: "https://nina-carducci-benjamin-verlaine.netlify.app/",
        },
        {
            imgSrc: imgOhmyfood,
            imgAlt: "OhMyFood",
            title: "OhMyFood",
            description: t("card-food"),
            siteUrl: "https://ohmyfood-benjamin-verlaine.netlify.app/",
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.getElementById("my_modal_3").showModal();
    };

    const closeModal = () => {
        document.getElementById("my_modal_3").close();
        setSelectedProject(null);
    };

    return (
        <main className="flex flex-col items-center justify-center gap-4 mt-10 mb-10 xl:gap-6 xl:mt-16 xl:mb-16">
            <h2 className="text-lg font-bold xl:text-3xl text-start font-title text-complementary">
                {t("welcome-project")}
            </h2>
            <div className="grid w-full gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8 ">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        description={project.description}
                        onClick={() => openModal(project)}
                    />
                ))}
            </div>
            <dialog
                id="my_modal_3"
                className="fixed inset-0 p-0 m-0 modal"
                onClick={closeModal}
            >
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                    <form method="dialog">
                        <button
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </form>
                    {selectedProject && (
                        <>
                            <h3 className="text-lg font-bold">
                                {selectedProject.title}
                            </h3>
                            <div className="border mockup-browser bg-base-300">
                                <div className="mockup-browser-toolbar">
                                    <div className="input">
                                        {selectedProject.siteUrl}
                                    </div>
                                </div>
                                <img
                                    src={selectedProject.imgSrc}
                                    alt={selectedProject.imgAlt}
                                    className="w-full h-auto mb-4 rounded"
                                />
                            </div>

                            <p className="py-4">
                                {selectedProject.description}
                            </p>
                        </>
                    )}
                </div>
            </dialog>
        </main>
    );
}
