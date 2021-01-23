//import head from './config/head'
import { modules, buildModules, modulesSettings } from './config/modules'
import plugins from './config/plugins'

export default {
  serverMiddleware: [
    // API middleware
    "./config/head",
    "./config/modules",
    "./config/plugins"
  ],
  //head: head,
  css: [],
  plugins: plugins,
  components: true,
  modules: modules,
  buildModules: buildModules,
  ...modulesSettings,
}
