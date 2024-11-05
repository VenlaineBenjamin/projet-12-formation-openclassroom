import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center gap-4 xl:gap-8 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("welcome-skills")}
            </h2>
        </main>
    );
}
