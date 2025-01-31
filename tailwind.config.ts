import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0C2F2F",
                secondary: "#1B5B5B",
                tertiary: "#63C9B9",
                line: "#1B5B5B",
                wash: "#FFFFFF",
                neutral: "#F1F7F7",
                brandPrimary: "#FF903F",
                brandSecondary: "#CEE3E4",
            },
        },
    },
    plugins: [],
} satisfies Config;
