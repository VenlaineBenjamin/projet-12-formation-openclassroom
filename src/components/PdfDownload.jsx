import { useState } from "react";
import { GrDocumentPdf } from "react-icons/gr";
import pdfCV from "../../public/Mon-nouveau-CV.pdf?url";

export default function PdfDownloadButton() {
    const [error, setError] = useState(null);

    const handleDownload = () => {
        if (!pdfCV) {
            setError("Le fichier PDF est indisponible pour le moment.");
            return false;
        }
        setError(null);
        return true;
    };

    return (
        <>
            <a
                href={pdfCV}
                download="cv-benjamin-verlaine"
                onClick={(e) => {
                    if (!handleDownload()) e.preventDefault();
                }}
                aria-label="Télécharger le Curriculum Vitae (format PDF)"
                aria-describedby="cv-description"
                title="Télécharger le Curriculum Vitae (format PDF, 186 ko)"
                className="flex items-center justify-center w-64 px-4 py-2 text-xl font-medium text-center text-white uppercase transition-transform rounded btn bg-gradient-to-r from-orange-700 via-yellow-500 to-green-400 gradient element-to-rotate hover:scale-105 focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-black"
            >
                <span id="cv-description" hidden>
                    Ce fichier est un Curriculum Vitae au format PDF. Taille
                    environ 1 Mo.
                </span>
                <span>Curriculum Vitae</span>
                <GrDocumentPdf className="ml-2" size={20} aria-hidden="true" />
            </a>
            {error && (
                <p className="mt-2 text-red-500" role="alert">
                    {error}
                </p>
            )}
        </>
    );
}
