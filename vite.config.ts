import { resolve } from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify from "vite-plugin-vuetify";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import { DirResolverHelper, dirResolver } from "vite-auto-import-resolvers";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        Vue({
            include: [/\.vue$/]
        }),
        Vuetify({
            autoImport: true
        }),
        VitePluginFonts({
            google: {
                families: ["Roboto"]
            }
        }),
        Pages({
            extensions: ["vue"]
        }),
        Components({
            deep: false
        }),
        DirResolverHelper(),
        AutoImport({
            imports: [
                "vue",
                "vue-router",
                "@vueuse/core",
                "@vueuse/head",
                {
                    vuetify: ["useTheme"]
                }
            ],
            resolvers: [dirResolver()]
        })
    ],
    server: {
        fs: {
            allow: [".."]
        },
        host: true,
        port: 3000
    }
});
