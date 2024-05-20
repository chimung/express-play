import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
    input: {
        index: 'src/index.js'
    },
    output: {
        format: "cjs",
        dir: "./dist"
    },
    external: [
        /node_modules/
    ],
    plugins: [nodeResolve()]
}