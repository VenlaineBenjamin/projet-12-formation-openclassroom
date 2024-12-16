import { useTranslation } from "react-i18next"; // Importing translation hook for localization
import { FaCss3, FaGitAlt, FaHtml5, FaJs } from "react-icons/fa";
import {
    SiFigma,
    SiGithub,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";

export default function About() {
    // Extracting the translation function for multi-language support
    const { t } = useTranslation();

    // Categorizing skills into frontend, frameworks, and tools
    const categorizedSkills = [
        {
            category: t("skill-frontend"),
            skills: [
                {
                    name: "HTML",
                    icon: <FaHtml5 />,
                    color: "#EC622C",
                    hoverColor: "#E15B00",
                },
                {
                    name: "CSS",
                    icon: <FaCss3 />,
                    color: "#663399",
                    hoverColor: "#5C2F7A",
                },
                {
                    name: "JavaScript",
                    icon: <FaJs />,
                    color: "#F7E025",
                    hoverColor: "#F6D700",
                },
                {
                    name: "Sass",
                    icon: <SiSass />,
                    color: "#CC6699",
                    hoverColor: "#B35770",
                },
                {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss />,
                    color: "#06B6D4",
                    hoverColor: "#06A5C1",
                },
            ],
        },
        {
            category: t("skill-frameworks"),
            skills: [
                {
                    name: "React",
                    icon: <SiReact />,
                    color: "#66DBFB",
                    hoverColor: "#5FD3FF",
                },
                {
                    name: "Redux",
                    icon: <SiRedux />,
                    color: "#764ABC",
                    hoverColor: "#6A3DAB",
                },
                {
                    name: "React Router",
                    icon: <SiReactrouter />,
                    color: "#6B7280",
                    hoverColor: "#5B5F6E",
                },
                {
                    name: "Vite",
                    icon: <SiVite />,
                    color: "#646CFF",
                    hoverColor: "#5A63B8",
                },
            ],
        },
        {
            category: t("skill-tools"),
            skills: [
                {
                    name: "Git",
                    icon: <FaGitAlt />,
                    color: "#F05032",
                    hoverColor: "#E64A19",
                },
                {
                    name: "GitHub",
                    icon: <SiGithub />,
                    color: "#181717",
                    hoverColor: "#111111",
                },
                {
                    name: "Figma",
                    icon: <SiFigma />,
                    color: "#F24E1E",
                    hoverColor: "#D91F0B",
                },
            ],
        },
    ];

    return (
        <section className="my-10 xl:mt-20">
            {" "}
            {/* Main container for the About section */}
            <header className="flex flex-col items-center justify-center gap-4 xl:gap-8">
                <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                    {t("welcome-skills")}
                </h2>
            </header>
            <div className="flex flex-col items-center pt-4">
                {categorizedSkills.map((category) => (
                    <article
                        key={category.category}
                        className="w-full md:w-1/2 xl:w-1/3 "
                    >
                        {" "}
                        {/* Each skill category */}
                        <h3 className="mx-4 my-4 text-lg font-semibold md:m-0 xl:text-2xl text-complementary">
                            {t(category.category)}{" "}
                            {/* Displaying category name */}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 p-4 mx-4 rounded-lg md:m-0 bg-base-200 md:flex-row">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="tooltip" // Tooltip for skill names
                                    data-tip={skill.name}
                                    aria-label={skill.name} // Adding aria-label for better accessibility
                                >
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center justify-center gap-2 p-2 text-5xl text-center text-white transition-transform transform border rounded-sm hover:translate-y-1 hover:scale-110"
                                        style={{
                                            backgroundColor: skill.color,
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.backgroundColor =
                                                skill.hoverColor)
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.backgroundColor =
                                                skill.color)
                                        }
                                    >
                                        {skill.icon}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
