import imgBooki from "../images/Capture-booki.webp";
import imgKasa from "../images/Capture-kasa.webp";
import imgNina from "../images/Capture-nina-carducci.webp";
import imgOhmyfood from "../images/Capture-ohmyfood.webp";

import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center gap-4 mt-10 mb-10 xl:gap-6 xl:mt-16 xl:mb-16">
            <h2 className="text-lg font-bold xl:text-3xl text-start font-title text-complementary">
                {t("welcome-project")}
            </h2>
            <div className="grid w-full gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-8">
                <ProjectCard
                    linkHref="https://booki-benjamin-verlaine.netlify.app/"
                    imgSrc={imgBooki}
                    imgAlt="Booki"
                    title="Booki"
                    description={t("card-booki")}
                />
                <ProjectCard
                    linkHref="https://verlaine-benjamin-kasa.netlify.app/"
                    imgSrc={imgKasa}
                    imgAlt="Kasa"
                    title="Kasa"
                    description={t("card-kasa")}
                />
                <ProjectCard
                    linkHref="https://nina-carducci-benjamin-verlaine.netlify.app/"
                    imgSrc={imgNina}
                    imgAlt="Nina Carducci"
                    title="Nina Carducci"
                    description={t("card-nina")}
                />
                <ProjectCard
                    linkHref="https://ohmyfood-benjamin-verlaine.netlify.app/"
                    imgSrc={imgOhmyfood}
                    imgAlt="OhMyFood"
                    title="OhMyFood"
                    description={t("card-food")}
                />
            </div>
        </main>
    );
}
