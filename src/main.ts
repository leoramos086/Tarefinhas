import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import titleMixin from '@/mixin/titleMixin'

import 'papercss/dist/paper.min.css'

createApp(App)
  // .mixin(titleMixin)
  .use(router)
  .mount('#app')
