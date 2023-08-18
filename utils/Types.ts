
export type Category = {"strCategory": string}

export type Drink = {
    "strDrink": string,
    "strDrinkThumb": string,
    "idDrink": string
}

export type DrinkDetails = {
    idDrink: string,
    strDrink: string,
    strCategory: string,
    strIBA: string,
    strInstructions: string,
    strDrinkThumb: string,
    strTags: string | Array<string>,
    ingredients: Array<string>,
}

export type FetchCategories = { drinks: Array<Category> }
export type FetchDrinks = { drinks: Array<Drink> }
export type FetchDrinkDetails = {
    drinks: [{
        'strDrink': string,
        'strCategory': string,
        'strIBA': string,
        'strInstructions': string,
        'strDrinkThumb': string,
        'strTags': string,
        'ingredients': Array<string>
    }]
}
