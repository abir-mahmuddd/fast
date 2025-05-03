import { resolve } from "paht";
import { defineconfig } from "vite";

export default defineconfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(_dirname, "index.html"),
            },
        },
    },
});