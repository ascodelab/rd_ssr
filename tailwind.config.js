/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
module.exports = {
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            blue: colors.lightBlue,
        },
        darkSelector: ".dark-mode"
    },
    variants: {
        backgroundColor: [
            "dark",
            "dark-hover",
            "dark-group-hover",
            "dark-even",
            "dark-odd",
            "hover",
            "responsive"
        ],
        borderColor: [
            "dark",
            "dark-focus",
            "dark-focus-within",
            "hover",
            "responsive"
        ],
        textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
    },
    plugins: [require("tailwindcss-dark-mode")(), require('@tailwindcss/typography')],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === "production",
        content: [
            "components/**/*.vue",
            "layouts/**/*.vue",
            "pages/**/*.vue",
            "plugins/**/*.js",
            "nuxt.config.js"
        ]
    }
};
