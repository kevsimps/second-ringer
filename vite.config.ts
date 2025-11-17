import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
    build:{
    //      minify: 'terser', // Use Terser for minification
    // terserOptions: {
    //   compress: false, // Disable code compression
    //   mangle: false,   // Disable variable and function name mangling (obfuscation)
    // },
        rollupOptions:{
            output:{
                entryFileNames:"[name].js",
                chunkFileNames:"[name].js",
                assetFileNames:"[name].[ext]"
            }
        }
    },
    plugins: [
    nodePolyfills({
    // Whether to polyfill `node:` protocol imports.
    protocolImports: true,
    }),
]
})