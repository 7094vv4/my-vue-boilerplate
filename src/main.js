import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  true,
  /XX[A-Z]\w+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  // router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
