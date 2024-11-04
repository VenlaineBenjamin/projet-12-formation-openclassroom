import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function About() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center gap-4 xl:gap-8 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("welcome")}
            </h2>
            <p className="flex flex-row w-3/4 text-center xl:text-2xl text-md font-body">
                <span className="text-xl xl:text-3xl">
                    <FaQuoteLeft />
                </span>
                {t("presentation")}
                <span className="self-end text-xl xl:text-3xl">
                    <FaQuoteRight />
                </span>
            </p>
        </main>
    );
}
