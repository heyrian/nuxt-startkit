// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/color-mode'],
    typescript: {
        typeCheck: true,
    },
    dir: {
        pages: 'views',
    },
    colorMode: {
        preference: 'light',
    },
})
