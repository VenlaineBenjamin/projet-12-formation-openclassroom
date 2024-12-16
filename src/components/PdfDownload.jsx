import { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrDocumentPdf } from "react-icons/gr";
import pdfCV from "../../public/Mon-nouveau-CV.pdf?url";

export default function PdfDownloadButton() {
    const { t } = useTranslation();
    const [error, setError] = useState(null);

    const handleDownload = (e) => {
        if (!pdfCV) {
            setError("Le fichier PDF est indisponible pour le moment.");
            e.preventDefault(); // Prevent the download if no PDF
            return false;
        }
        setError(null); // Reset error if file is available
        return true;
    };

    return (
        <>
            <a
                href={pdfCV}
                download="cv-benjamin-verlaine"
                onClick={handleDownload}
                aria-label={t("aria-btn-pdf")} // Accessible label for screen readers
                aria-describedby="cv-description"
                title={t("aria-btn-pdf")}
                className="flex items-center justify-center w-64 px-4 py-2 text-xl font-medium text-center text-white uppercase transition-transform rounded btn bg-gradient-to-r from-orange-700 via-yellow-500 to-green-400 gradient element-to-rotate hover:scale-105 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black"
            >
                <span id="cv-description" hidden>
                    Ce fichier est un Curriculum Vitae au format PDF. Taille
                    environ 1 Mo.
                </span>
                <span>Curriculum Vitae</span>
                <GrDocumentPdf className="ml-2" size={20} aria-hidden="true" />
            </a>

            {/* Display error message if the file is not available */}
            {error && (
                <p
                    className="mt-2 text-red-500"
                    role="alert"
                    aria-live="assertive"
                >
                    {error}
                </p>
            )}
        </>
    );
}
