import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage("");

        try {
            const response = await emailjs.sendForm(
                "service_amluzkd",
                "template-208t9oe",
                e.target,
                "iVpu2L8mWJtcBTuZM"
            );
            console.log("Response:", response); // Vérifiez la réponse ici
            setStatusMessage("Message envoyé ! Merci de m'avoir contacté.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            if (error.text) {
                setStatusMessage(`Erreur : ${error.text}`);
            } else {
                setStatusMessage("Erreur lors de l'envoi. Veuillez réessayer.");
            }
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
        <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-4xl font-bold">Contactez-moi</h1>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-base-100"
            >
                <div className="mb-4 form-control">
                    <label className="label" htmlFor="name">
                        <span className="label-text">Votre nom :</span>
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
                        <span className="label-text">Votre email :</span>
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
                        <span className="label-text">Votre message :</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full resize-none textarea textarea-bordered"
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
                    <p className="mt-4 text-lg text-center text-red-500">
                        {statusMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
