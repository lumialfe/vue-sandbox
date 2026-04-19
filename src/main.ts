import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from './router';
import { createI18n } from 'vue-i18n';
import { MESSAGES_JA, MESSAGES_EN } from './i18n/messages';

const i18n = createI18n({
    legacy: false,
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: MESSAGES_EN
        },
        ja: {
            message: MESSAGES_JA
        }
    }
})

const app = createApp(App)
app.use(router)

const pinia = createPinia();
app.use(pinia);

app.use(i18n)
app.mount('#app');
