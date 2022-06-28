import Vue from 'vue'
import App from './App.vue'
import MeuContador from './MeuContador.vue'

Vue.config.productionTip = false
Vue.component('app-contador', MeuContador)


new Vue ({
    render: h => h(App),
}).$mount('#app')


