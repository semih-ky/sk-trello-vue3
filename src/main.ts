import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { 
  OiCheck, 
  OiX, 
  OiPlus, 
  OiSearch, 
  OiTrash, 
  OiGrabber, 
  OiPencil, 
  OiPersonFill, 
  OiAlert,
  OiCode
} from 'oh-vue-icons/icons/oi'

addIcons(
  OiCheck, 
  OiX, 
  OiPlus, 
  OiSearch, 
  OiTrash, 
  OiGrabber, 
  OiPencil, 
  OiPersonFill,
  OiAlert,
  OiCode
);

const pinia = createPinia()

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(pinia)
  .mount('#app');
