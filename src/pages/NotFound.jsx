import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Component for displaying a generic error page
export default function ErrorPage() {
    const { t } = useTranslation(); // Translation hook for i18n support

    return (
        <main className="flex flex-col items-center justify-center gap-4 xl:gap-8 xl:mt-20">
            {/* Error code heading */}
            <h2
                className="text-xl font-bold xl:text-4xl text-start font-title text-complementary"
                role="heading"
                aria-level="2"
            >
                {t("error-code")}
            </h2>

            {/* Error message description */}
            <p
                className="flex flex-row w-5/6 text-center xl:w-3/4 xl:text-2xl text-md font-body"
                role="contentinfo"
            >
                {t("error-message")}
            </p>

            {/* Link to redirect the user to the homepage */}
            <Link
                to="/"
                className="mt-6 btn btn-primary"
                aria-label={t("error-button")}
            >
                {t("error-button")}
            </Link>
        </main>
    );
}
