export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiURL: process.env.API_URL,
    imagePath: process.env.IMAGE_PATH,
    axios: {
      browserBaseURL: process.env.API_URL
    }
  },
  head: {
    title: process.env.SITENAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' }
    ]
  },
  css: [],
  plugins: ['~/plugins/vov'],
  components: true,
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxt/content'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faHome', 'faMoon', 'faSun', 'faSearch', 'faEnvelope', 'faUser', 'faBriefcase', 'faQuestion', 'faCalendar', 'faTags', 'faList', 'faClock']
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
