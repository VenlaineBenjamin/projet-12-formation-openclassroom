import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiReactrouter, SiRedux, SiSass } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import imgBooki from "../images/Capture-booki.webp";
import imgKasa from "../images/Capture-kasa.webp";
import imgNina from "../images/Capture-nina-carducci.webp";
import imgOhmyfood from "../images/Capture-ohmyfood.webp";

export default function Project() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    const projects = [
        {
            imgSrc: imgBooki,
            imgAlt: "Booki",
            title: "Booki",
            description: t("card-booki"),
            moduleDescription: t("module-booki"),
            siteUrl: "https://booki-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
                { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
            ],
        },
        {
            imgSrc: imgKasa,
            imgAlt: "Kasa",
            title: "Kasa",
            description: t("card-kasa"),
            moduleDescription: t("module-kasa"),
            siteUrl: "https://verlaine-benjamin-kasa.netlify.app/",
            technologies: [
                { name: "React", icon: <FaReact />, color: "#61dafb" },
                { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
                {
                    name: "React Router",
                    icon: <SiReactrouter />,
                    color: "#6B7280",
                },
            ],
        },
        {
            imgSrc: imgNina,
            imgAlt: "Nina Carducci",
            title: "Nina Carducci",
            description: t("card-nina"),
            moduleDescription: t("module-nina"),
            siteUrl: "https://nina-carducci-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "React", icon: <FaReact />, color: "#61dafb" },
                { name: "Redux", icon: <SiRedux />, color: "#764abc" },
            ],
        },
        {
            imgSrc: imgOhmyfood,
            imgAlt: "OhMyFood",
            title: "OhMyFood",
            description: t("card-food"),
            moduleDescription: t("module-food"),
            siteUrl: "https://ohmyfood-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
                { name: "SASS", icon: <SiSass />, color: "#cc6699" },
            ],
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
        setSelectedProject(null);
    };

    return (
        <main className="flex flex-col items-center justify-center gap-4 mt-10 mb-10 xl:gap-6 xl:mt-16 xl:mb-16">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("welcome-project")}
            </h2>
            <div className="grid w-full gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        imgSrc={project.imgSrc}
                        imgAlt={project.imgAlt}
                        title={project.title}
                        description={project.description}
                        onClick={() => openModal(project)}
                        technologies={project.technologies}
                    />
                ))}
            </div>
            <dialog
                ref={modalRef}
                id="project_modal"
                className="fixed inset-0 p-0 m-0 modal"
                onClick={closeModal}
            >
                <div
                    className="modal-box max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
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
                            <a
                                href={selectedProject.siteUrl}
                                className="relative group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="absolute inset-0 transition-opacity duration-300 rounded opacity-0 bg-slate-900 group-hover:opacity-50"></span>
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-white transition-opacity duration-300 opacity-0 font-nav group-hover:opacity-100">
                                    {t("module-link")} <FiExternalLink />
                                </span>
                                <img
                                    src={selectedProject.imgSrc}
                                    alt={selectedProject.imgAlt}
                                    className="w-full h-auto rounded"
                                />
                            </a>
                            <p className="py-4">
                                {selectedProject.moduleDescription}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {selectedProject.technologies.map(
                                    (tech, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center"
                                            style={{ color: tech.color }}
                                        >
                                            <div className="text-4xl">
                                                {tech.icon}
                                            </div>
                                            <span className="text-sm font-semibold">
                                                {tech.name}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>
            </dialog>
        </main>
    );
}
