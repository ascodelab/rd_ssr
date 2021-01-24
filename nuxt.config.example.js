import head from './config/head'
import { modules, buildModules, modulesSettings } from './config/modules'
import plugins from './config/plugins'

export default {
    publicRuntimeConfig: {},
    privateRuntimeConfig: {},
    head: head,
    css: [],
    plugins: plugins,
    components: true,
    modules: modules,
    buildModules: buildModules,
    ...modulesSettings,
}
