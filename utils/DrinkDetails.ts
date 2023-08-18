import { DrinkDetails } from "~/utils/Types";
import { Ref } from "vue";

export const drinkDetail = (data: Ref): DrinkDetails => {
    const ingredients: Array<string> = Object.keys(data.value.drinks[0])
        .filter((key: string) => key.startsWith("strIngredient"))
        .map((key: string) => data.value.drinks[0][key])
        .filter((value: string) => Boolean(value))

    return {
        idDrink: data.value.drinks[0].idDrink,
        strDrink: data.value.drinks[0].strDrink,
        strCategory: data.value.drinks[0].strCategory,
        strIBA: data.value.drinks[0].strIBA ?? "",
        strInstructions: data.value.drinks[0].strInstructions ?? "",
        strDrinkThumb: data.value.drinks[0].strDrinkThumb ?? "",
        strTags: data.value.drinks[0].strTags?.split(',') ?? [],
        ingredients: ingredients
    }
}
