import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ["./resources/js/**/*.{ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        tokens: {
            colors: {
                primary: { value: "hsl(0, 97% ,55%)" },
                secondary: { value: "hsl(0, 0%, 87%)" },
            },
        },
        extend: {},
    },

    // The output directory for your css system
    outdir: "./resources/styled-system",
    jsxFramework: "react",
});
