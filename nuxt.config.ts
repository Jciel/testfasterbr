// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      API_URL_BASE_LIST: 'https://www.thecocktaildb.com/api/json/v1/1/list.php',
      API_URL_BASE_FILTER: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
      API_URL_BASE_LOOKUP: 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php',
      API_URL_BASE_LOOKUP_RANDOM: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      API_URL_BASE_SEARCH: 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
    }
  },

  modules: [
    '@pinia/nuxt',
  ],

  imports: {
    dirs: ['./stores', './utils'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
