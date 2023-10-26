import { defineConfig } from "vite";
import path from "path";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.ts"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./resources/js"),
            "@style-system": path.resolve(
                __dirname,
                "./resources/styled-system",
            ),
        },
    },
});
