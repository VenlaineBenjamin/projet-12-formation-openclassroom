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

        // Validation du format de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
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
            setStatusMessage(t("form-message-sent"));
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
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
                className="w-full max-w-lg p-8 rounded-lg xl:shadow-lg bg-base-100"
            >
                <div className="mb-4 form-control">
                    <label className="flex items-center gap-2 input input-bordered bg-base-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                            aria-label={t("form-icon-name")}
                        >
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="grow input-bordered"
                            placeholder={t("form-name")}
                        />
                    </label>
                </div>
                <div className="mb-4 form-control">
                    <label className="flex items-center gap-2 input input-bordered bg-base-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                            aria-label={t("form-icon-email")}
                        >
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="grow input-bordered "
                            placeholder={t("form-email")}
                        />
                    </label>
                </div>
                <div className="mb-4 form-control">
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered bg-base-200"
                        placeholder={t("form-message")}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full mt-4 btn btn-primary"
                    disabled={isSending}
                >
                    {isSending ? (
                        <span className="loading loading-bars loading-md"></span> // Assurez-vous de styliser le loader
                    ) : (
                        t("form-submit")
                    )}
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
