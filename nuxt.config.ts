// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      APP_URL: process.env.APP_URL,
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],

  googleFonts: {
    families: {
      Inter: [400, 700],
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

});
