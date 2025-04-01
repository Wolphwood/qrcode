import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { create, NButton, NSlider, NCard, NInputNumber, NSpace, NDivider, NProgress, NCollapse, NCollapseItem, NCheckbox, qrCodeProps } from 'naive-ui'

const naive = create({
  components: [NButton, NSlider, NCard, NInputNumber, NSpace, NDivider, NProgress, NCollapse, NCollapseItem, NCheckbox, qrCodeProps],
});

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
