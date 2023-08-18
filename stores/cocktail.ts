import { _AsyncData } from "#app/composables/asyncData";
import { FetchError } from "ofetch";
import {Category, Drink, FetchCategories, FetchDrinks, FetchDrinkDetails, DrinkDetails} from "~/utils/Types";
import { RuntimeConfig } from "nuxt/schema";
import { drinkDetail } from "#build/imports";

export const useCocktail = defineStore('cocktail', {
    state: () => ({
        categories: [] as Array<Category>,
        selectedCategory: "" as string,
        drinks: [] as Array<Drink>,
        selectedDrink: {} as DrinkDetails
    }),

    getters: {
        getCategories: (state) => state.categories,
        getDrinks: (state) => state.drinks,
        getSelectedDrink: (state) => state.selectedDrink
    },

    actions: {
        async fetchCategories (): Promise<void> {
            const runtimeConfig: RuntimeConfig = useRuntimeConfig()
            const { data, error }: _AsyncData<FetchCategories, FetchError<any> | null> = await useFetch(`${runtimeConfig.public.API_URL_BASE_LIST}?c=list`)
            this.categories = data.value.drinks
        },

        async fetchDrinks (category: string): Promise<void> {
            const runtimeConfig: RuntimeConfig = useRuntimeConfig()
            const { data, error }: _AsyncData<FetchDrinks, FetchError<any> | null> = await useFetch(`${runtimeConfig.public.API_URL_BASE_FILTER}?c=${category}`)
            this.drinks = data.value.drinks
        },

        async fetchDrinkDetail (idDrink: string): Promise<void> {
            const runtimeConfig: RuntimeConfig = useRuntimeConfig()
            const { data, error }: _AsyncData<FetchDrinkDetails, FetchError<any> | null> = await useFetch(`${runtimeConfig.public.API_URL_BASE_LOOKUP}?i=${idDrink}`)

            this.selectedDrink = drinkDetail(data)
        },

        async fetchRandomDrink (): Promise<void> {
            const runtimeConfig: RuntimeConfig = useRuntimeConfig()
            const { data, error }: _AsyncData<FetchDrinkDetails, FetchError<any> | null> = await useFetch(runtimeConfig.public.API_URL_BASE_LOOKUP_RANDOM)

            this.selectedDrink = drinkDetail(data)
        },

        async searchCocktail (input: string) {
            const runtimeConfig: RuntimeConfig = useRuntimeConfig()
            const { data, error }: _AsyncData<FetchDrinks, FetchError<any> | null> = await useFetch(`${runtimeConfig.public.API_URL_BASE_SEARCH}?s=${input}`)
            this.drinks = data.value.drinks
        }
    }
})

// if (import.meta.hot) {
//     import.meta.hot.accept(acceptHMRUpdate(useCocktail, import.meta.hot))
// }
