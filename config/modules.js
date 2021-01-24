export const modules = [
    '@nuxtjs/axios',
    '@nuxt/image',
    'nuxt-fontawesome'
]

export const buildModules = [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
]

//custom build/module setting
export const modulesSettings = {
    fontawesome: {
        component: 'fa',
        imports: [
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['faMoon', 'faSun', 'faSearch', 'faEnvelope', 'faUser', 'faBriefcase']
            }
        ]
    },
    axios: {},
    build: {
    },
    purgeCSS: {
        whitelist: ['dark-mode']
    },
}
