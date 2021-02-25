const {execSync} = require('child_process');
const {writeFileSync, readFileSync} = require('fs');

import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import {terser} from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import replace from '@rollup/plugin-replace';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const production = !process.env.ROLLUP_WATCH;
const buildPath = 'public/build';
const buildJs = 'bundle.js';
const buildCSS = 'bundle.css';
const webcomponents = [
    'coverified-wika',
    'coverified-topic',
];

function serve() {
    let server;

    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: [
                    'ignore',
                    'inherit',
                    'inherit',
                ],
                shell: true,
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

// ensures directories and files are present
function prepare() {
    webcomponents.forEach(componentName => {
        execSync(`mkdir -p ${buildPath}/${componentName}`);
        execSync(`touch ${buildPath}/${componentName}/${buildCSS}`);
        execSync(`touch ${buildPath}/${componentName}/${buildJs}`);
    });
}

export default webcomponents.map((componentName, index) => ({
    input: `src/${componentName}.js`,
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: `${buildPath}/${componentName}/${buildJs}`,
    },
    plugins: [
        svelte({
            preprocess: preprocess({
                postcss: {
                    plugins: [
                        autoprefixer(),
                    ],
                },
            }),
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production,
            },
        }),
        prepare(),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css({
            output: styles => {
                writeFileSync(`${buildPath}/${componentName}/${buildCSS}`, styles);
                writeFileSync(`${buildPath}/${componentName}/${buildJs}`, readFileSync(`${buildPath}/${componentName}/${buildJs}`, 'utf8').replace('{{{###STYLES###}}}', styles));
            }
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),

        commonjs(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),

        replace({
            '{{{###STYLES###}}}': readFileSync(`${buildPath}/${componentName}/${buildCSS}`, 'utf8'),
            delimiters: ['', ''],
        }),
    ],
    watch: {
        clearScreen: true,
    },
}));
