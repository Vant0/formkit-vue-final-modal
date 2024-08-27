import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin } from '@formkit/vue'
import { createI18n } from 'vue-i18n'
import { createVfm } from 'vue-final-modal'

import formKitConfig from '@/formkit/formkit.config'
import nl from '@/locales/nl.json'

import App from './App.vue'
import router from './router'

import 'vue-final-modal/style.css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'nl',
  messages: { nl }
})

const vfm = createVfm()

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vfm)
app.use(plugin, formKitConfig)

app.mount('#app')
