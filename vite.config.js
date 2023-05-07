import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: "src",
    base: '/adopt-me/',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'src/index.html',
            },
        },
    },
});