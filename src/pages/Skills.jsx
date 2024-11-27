import { useTranslation } from "react-i18next";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs } from "react-icons/fa";
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
    const { t } = useTranslation();

    const categorizedSkills = [
        {
            category: t("skill-frontend"),
            skills: [
                {
                    name: "HTML",
                    icon: <FaHtml5 />,
                    color: "#EC622C",
                },
                {
                    name: "CSS",
                    icon: <FaCss3Alt />,
                    color: "#2545DB",
                },
                {
                    name: "JavaScript",
                    icon: <FaJs />,
                    color: "#F7E025",
                },
                {
                    name: "Sass",
                    icon: <SiSass />,
                    color: "#CC6699",
                },
                {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss />,
                    color: "#06B6D4",
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
                },
                {
                    name: "Redux",
                    icon: <SiRedux />,
                    color: "#764ABC",
                },
                {
                    name: "React Router",
                    icon: <SiReactrouter />,
                    color: "#6B7280",
                },
                {
                    name: "Vite",
                    icon: <SiVite />,
                    color: "#646CFF",
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
                },
                {
                    name: "GitHub",
                    icon: <SiGithub />,
                    color: "#181717",
                },
                {
                    name: "Figma",
                    icon: <SiFigma />,
                    color: "#F24E1E",
                },
            ],
        },
    ];

    return (
        <main className="flex flex-col items-center justify-center gap-4 my-10 xl:gap-8 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("welcome-skills")}
            </h2>
            {categorizedSkills.map((category) => (
                <div
                    key={category.category}
                    className="w-full md:w-1/2 xl:w-1/3"
                >
                    <h3 className="my-4 text-lg font-semibold xl:text-2xl text-primary">
                        {t(category.category)}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 p-4 rounded-lg bg-base-200 md:flex-row">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="tooltip"
                                data-tip={skill.name}
                                aria-label={skill.name}
                            >
                                <div
                                    className={`flex flex-col items-center justify-center gap-2 p-2 text-5xl text-center text-white transition-transform transform border rounded-sm hover:translate-y-1 hover:scale-110`}
                                    style={{
                                        backgroundColor: skill.color,
                                    }}
                                >
                                    {skill.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}
