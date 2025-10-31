import {defineConfig} from tailwindcss
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    Plugin:[
        tailwindcss(),
    ]
})