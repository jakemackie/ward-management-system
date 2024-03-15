// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
