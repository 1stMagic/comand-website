import {defineConfig} from 'vite'
import {resolve} from "path"
import vue from '@vitejs/plugin-vue'
import iconFontPlugin from "./plugins/iconFont"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        iconFontPlugin({
            targetFilenameTemplate: "{cssName}Icons.json",
            targetDirectory: resolve(__dirname, "src/help/component-library/generated")
        })
    ]
})
