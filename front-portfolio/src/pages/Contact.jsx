import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage("");
        setIsSuccess(false);

        try {
            const response = await emailjs.sendForm(
                "service_amluzkd",
                "template_208t9oe",
                e.target,
                "iVpu2L8mWJtcBTuZM"
            );
            console.log("Response:", response); // Vérifiez la réponse ici
            setStatusMessage("Message envoyé ! Merci de m'avoir contacté.");
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            if (error.text) {
                setStatusMessage(`Erreur : ${error.text}`);
            } else {
                setStatusMessage("Erreur lors de l'envoi. Veuillez réessayer.");
            }
            setIsSuccess(false);
        }
        setIsSending(false);
    };

    useEffect(() => {
        let timeoutId;
        if (statusMessage) {
            timeoutId = setTimeout(() => {
                setStatusMessage("");
            }, 5000); // 5000 millisecondes = 5 secondes
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
                className="w-full max-w-lg p-8 rounded-lg xl:shadow-lg bg-base-100"
            >
                <div className="mb-4 form-control">
                    <label className="label" htmlFor="name">
                        <span className="font-bold label-text font-body">
                            {t("form-name")} :
                        </span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full input input-bordered"
                    />
                </div>
                <div className="mb-4 form-control">
                    <label className="label" htmlFor="email">
                        <span className="font-bold label-text font-body">
                            {t("form-email")} :
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full input input-bordered"
                    />
                </div>
                <div className="mb-4 form-control">
                    <label className="label" htmlFor="message">
                        <span className="font-bold label-text font-body">
                            {t("form-message")} :
                        </span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full resize-y textarea textarea-bordered"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 btn btn-primary"
                    disabled={isSending}
                >
                    {isSending ? "Envoi en cours..." : "Envoyer"}
                </button>
                {statusMessage && (
                    <p
                        className={`mt-4 text-lg text-center ${
                            isSuccess ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
