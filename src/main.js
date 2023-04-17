import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone, faUserSecret } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret, faPhone, faEnvelope)

  createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import "bootstrap/dist/js/bootstrap.js";
