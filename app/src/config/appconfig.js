var config = require('./configdata')

var env = process.env.NODE_ENV
var baseconfig = (env === 'development' ? config.devConfig : config.buildConfig)

export default {
    install(Vue) {
        Vue.prototype.$config = baseconfig
    }
};
