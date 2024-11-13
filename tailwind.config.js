import daisyui from "daisyui";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ADD8E6",
                secondary: "#40E0D0",
                link: "#000080",
                complementary: "#FF7F50",
            },
            fontFamily: {
                body: ["Roboto Flex", "sans-serif"],
                title: ["Raleway", "sans-serif"],
                nav: ["Open Sans", "sans-serif"],
            },
            boxShadow: {
                white: "0 4px 6px rgba(255, 255, 255, 0.3)", // Ombre blanche pour le mode sombre
                light: "0 4px 6px rgba(0, 0, 0, 0.5)", // Ombre légère pour le mode clair
            },
        },
    },
    daisyui: {
        themes: ["corporate", "synthwave"],
    },
    plugins: [daisyui, tailwindcssAnimate], // Utilise les plugins importés
};
