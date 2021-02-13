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
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo.png' },
      { rel: 'stylesheet', type: "text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  css: [],
  plugins: ['~/plugins/vov'],
  components: true,
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxt/content',
    'vue-social-sharing/nuxt'
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
        icons: ['faHome', 'faMoon', 'faSun', 'faSearch', 'faEnvelope', 'faUser', 'faBriefcase', 'faQuestion', 'faCalendar', 'faTags', 'faList', 'faClock', 'faShareAlt']
      }
    ]
  },
  //'faFacebookF', 'faTwitter', 'faLinkedinIn', 'faWhatsapp', 'faTelegramPlane', 'faSkype'
  axios: {},
  build: {
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  generate: {
    routes: [
      'getting-started-with-awake',
      'light-css-footprint'
    ]
  }
}
