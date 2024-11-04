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
        },
    },
    daisyui: {
        themes: ["corporate", "night"],
    },
    plugins: [require("daisyui")],
};
