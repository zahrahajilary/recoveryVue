import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n'
import vuetify from './plugins/vuetify';
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios;

router.beforeEach((to,from,next)=>{
  let language = to.params.lang;
  if(!language){
    language = 'en'
  }
  i18n.locale = language
    if(to.matched.some(record => record.meta.requiresAuth)) {
      console.log('checkeddddd')
      if (!router.app.$store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
});
new Vue({
  store,
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
