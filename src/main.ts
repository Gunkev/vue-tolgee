import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { BackendFetch, DevTools, Tolgee, VueTolgee } from '@tolgee/vue'

const tolgee = Tolgee()
  .use(DevTools())
  .use(BackendFetch())
  .init({
    language: 'en',
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY
  })

const app = createApp(App)

app.use(VueTolgee, { tolgee })
app.mount('#app')
