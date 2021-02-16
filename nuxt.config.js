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
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        'data-ad-client': process.env.G_ADSENSE,
        async: true
      }
    ]
  },
  css: [],
  plugins: ['~/plugins/vov'],
  components: true,
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome',
    '@nuxt/content',
    'vue-social-sharing/nuxt',
    '@nuxtjs/sitemap'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics'
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
  googleAnalytics: {
    id: process.env.G_ANALYTICS
  },
  axios: {},
  build: {
  },
  sitemap: {
    hostname: process.env.BASE_URL,
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('posts').only(['slug']).fetch()

      return files.map(file => file.slug)
    }
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  // content: {
  //   markdown: {
  //     prism: {
  //       theme: 'prism-themes/themes/prism-material-oceanic.css'
  //     }
  //   }
  // },
  generate: {
    //routes: ['getting-started-with-awake','light-css-footprint']
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content('posts').only(['slug']).fetch()

      return files.map(file => file.slug)
    }
  },
}
