import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

// Fonction utilitaire pour valider un email
const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage("");
        setIsSuccess(false);

        // Validation de l'email
        if (!isEmailValid(formData.email)) {
            setStatusMessage(t("form-invalid-email"));
            setIsSuccess(false);
            setIsSending(false);
            return;
        }

        try {
            const response = await emailjs.sendForm(
                "service_amluzkd",
                "template_208t9oe",
                e.target,
                "iVpu2L8mWJtcBTuZM"
            );
            console.log("Response:", response);
            setStatusMessage(t(""));
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            // Scroll to top of form after submission
            window.scrollTo(0, 0);
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            setStatusMessage(t("form-message-error"));
            setIsSuccess(false);
        }
        setIsSending(false);
    };

    useEffect(() => {
        let timeoutId;
        if (statusMessage) {
            timeoutId = setTimeout(() => {
                setStatusMessage("");
            }, 5000);
        }
        return () => clearTimeout(timeoutId);
    }, [statusMessage]);

    return (
        <div className="flex flex-col items-center justify-center my-10 xl:mt-20">
            <h2 className="text-xl font-bold xl:text-4xl text-start font-title text-complementary">
                {t("form-title")}
            </h2>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg p-8 rounded-lg xl:shadow-lg bg-base-100 form-control"
                aria-labelledby="contact-form-title"
            >
                {/* Champ Nom */}
                <div className="relative mb-4 form-control">
                    <FaUser className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-3" />
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 input input-bordered bg-base-200"
                        placeholder={t("form-name")}
                        aria-label={t("form-name")}
                    />
                </div>

                {/* Champ Email */}
                <div className="relative mb-4 form-control">
                    <IoMdMail className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-3" />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`input input-bordered bg-base-200 pl-10 focus:outline-none ${
                            isEmailValid(formData.email)
                                ? "focus:ring-2 focus:ring-green-500 ring-offset-2"
                                : "focus:ring-2 focus:ring-red-500 ring-offset-2"
                        }`}
                        placeholder={t("form-email")}
                        aria-label={t("form-email")}
                    />
                </div>

                {/* Champ Message */}
                <div className="mb-4 form-control">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered bg-base-200"
                        placeholder={t("form-message")}
                        aria-label={t("form-message")}
                    ></textarea>
                </div>

                {/* Bouton Soumettre */}
                <button
                    type="submit"
                    className="w-full mt-4 btn btn-primary"
                    disabled={isSending}
                    aria-live="polite"
                >
                    {isSending ? (
                        <span className="loading loading-bars loading-md"></span>
                    ) : (
                        t("form-submit")
                    )}
                </button>

                {/* Message de statut */}
                {statusMessage && (
                    <p
                        className={`mt-4 text-lg text-center ${
                            isSuccess ? "text-green-500" : "text-red-500"
                        }`}
                        role="alert"
                    >
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
