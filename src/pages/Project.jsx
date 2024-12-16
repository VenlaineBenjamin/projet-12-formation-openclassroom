import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
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

    // Projects data array
    const projects = [
        {
            imgSrc: imgBooki,
            imgAlt: "Screenshot of the Booki website",
            title: "Booki",
            githubUrl: "https://github.com/VenlaineBenjamin/Booki",
            description: t("card-booki"),
            moduleDescription: t("module-booki"),
            siteUrl: "https://booki-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "CSS", icon: <FaCss3 />, color: "#663399" },
                { name: "HTML", icon: <FaHtml5 />, color: "#EC622C" },
            ],
        },
        {
            imgSrc: imgKasa,
            imgAlt: "Screenshot of the Kasa website",
            title: "Kasa",
            githubUrl:
                "https://github.com/VenlaineBenjamin/projet-7-formation-openclassroom",
            description: t("card-kasa"),
            moduleDescription: t("module-kasa"),
            siteUrl: "https://verlaine-benjamin-kasa.netlify.app/",
            technologies: [
                { name: "React", icon: <FaReact />, color: "#66DBFB" },
                { name: "JavaScript", icon: <FaJs />, color: "#F7E025" },
                {
                    name: "React Router",
                    icon: <SiReactrouter />,
                    color: "#6B7280",
                },
            ],
        },
        {
            imgSrc: imgNina,
            imgAlt: "Screenshot of the Nina Carducci website",
            title: "Nina Carducci",
            githubUrl: "https://github.com/VenlaineBenjamin/project-8",
            description: t("card-nina"),
            moduleDescription: t("module-nina"),
            siteUrl: "https://nina-carducci-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "React", icon: <FaReact />, color: "#66DBFB" },
                { name: "Redux", icon: <SiRedux />, color: "#7A50BF" },
            ],
        },
        {
            imgSrc: imgOhmyfood,
            imgAlt: "Screenshot of the OhMyFood website",
            title: "OhMyFood",
            githubUrl:
                "https://github.com/VenlaineBenjamin/projet-4-oc-Ohmyfood-",
            description: t("card-food"),
            moduleDescription: t("module-food"),
            siteUrl: "https://ohmyfood-benjamin-verlaine.netlify.app/",
            technologies: [
                { name: "HTML", icon: <FaHtml5 />, color: "#EC622C" },
                { name: "SASS", icon: <SiSass />, color: "#D2679E" },
            ],
        },
    ];

    // Opens the modal with the selected project details
    const openModal = (project) => {
        setSelectedProject(project);
        document.body.classList.add("no-scroll"); // Prevent body scroll when modal is open
        if (modalRef.current) {
            modalRef.current.showModal();
            modalRef.current.scrollIntoView({ behavior: "smooth" });
            // Focus on modal title for accessibility
            const modalTitle = modalRef.current.querySelector("h3");
            if (modalTitle) {
                modalTitle.focus();
            }
        }
    };

    // Closes the modal and resets selected project
    const closeModal = () => {
        document.body.classList.remove("no-scroll");
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

            {/* Responsive grid layout for project cards */}
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

            {/* Modal dialog for displaying project details */}
            <dialog
                ref={modalRef}
                id="project_modal"
                className="fixed w-full modal"
                onClick={closeModal}
                aria-labelledby="project_modal_title"
                aria-describedby="project_modal_description"
            >
                <div
                    className="modal-box max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()} // Prevent closing modal on clicking inside
                >
                    <form method="dialog">
                        <button
                            type="button"
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                    </form>

                    {/* Modal content with project details */}
                    {selectedProject && (
                        <>
                            <div className="flex items-center gap-4">
                                <h3
                                    className="text-2xl font-bold"
                                    id="project_modal_title"
                                >
                                    {selectedProject.title}
                                </h3>
                                <a
                                    href={selectedProject.githubUrl}
                                    className="flex items-center gap-2 text-black hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit GitHub repository"
                                >
                                    <FaGithub className="text-2xl" />
                                </a>
                            </div>

                            <div className="flex flex-col items-center gap-4 py-4">
                                <a
                                    href={selectedProject.siteUrl}
                                    className="relative group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit project site"
                                >
                                    <span className="absolute inset-0 transition-opacity duration-300 rounded opacity-0 bg-slate-900 group-hover:opacity-50"></span>
                                    <span className="absolute inset-0 flex items-center justify-center font-bold text-white transition-opacity duration-300 opacity-0 font-nav group-hover:opacity-100">
                                        {t("module-link")} <FiExternalLink />
                                    </span>
                                    <img
                                        src={selectedProject.imgSrc}
                                        alt={selectedProject.imgAlt}
                                        className="w-full h-auto rounded"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <p id="project_modal_description" className="py-4">
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
