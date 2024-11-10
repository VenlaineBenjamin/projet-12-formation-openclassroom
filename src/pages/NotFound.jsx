import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center gap-4 xl:gap-8 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("error-code")}
            </h2>
            <p className="flex flex-row w-5/6 text-center xl:w-3/4 xl:text-2xl text-md font-body">
                {t("error-message")}
            </p>
            <Link to="/" className="mt-6 btn btn-primary">
                {t("error-button")}
            </Link>
        </main>
    );
}
