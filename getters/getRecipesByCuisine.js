import axios from "axios";
import {convertRecipes} from "../utils/convertFunction.js";

export let recipes

async function getRecipesByCuisine(cuisineType) {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?app_id=df0dc624&app_key=c75e7ca86e23609d5ca298df3d1a481b&type=public&cuisineType=${cuisineType}`)
        recipes = response.data.hits
    } catch (error) {
        console.log(error)
    }
}

getRecipesByCuisine("Mexican")
    .then(() => {
        recipes = convertRecipes(recipes);
    })
    .catch((err) => {
        console.log(err)
    })

