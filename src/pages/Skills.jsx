import { useTranslation } from "react-i18next";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs } from "react-icons/fa";
import {
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

    const skills = [
        { name: "HTML", icon: <FaHtml5 />, color: "#EC622C" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#2545DB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7E025" },
        { name: "Sass", icon: <SiSass />, color: "#CC6699" },
        { name: "Tailwindcss", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "React", icon: <SiReact />, color: "#66DBFB" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Github", icon: <SiGithub />, color: "#181717" },
        { name: "React Router", icon: <SiReactrouter />, color: "#6B7280" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    ];

    return (
        <main className="flex flex-col items-center justify-center gap-4 mt-10 xl:gap-8 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("welcome-skills")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:flex-row">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="tooltip"
                        data-tip={skill.name}
                    >
                        <div
                            className="flex flex-col flex-wrap items-center justify-center gap-2 p-2 text-5xl text-center text-white transition-transform transform border border-black rounded-sm hover:translate-y-2 hover:scale-125 w-22"
                            style={{ backgroundColor: skill.color }}
                        >
                            {skill.icon}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
