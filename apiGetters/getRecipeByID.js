import axios from "axios";
import {convertOneRecipe} from "../utils/convertFunctions.js";

async function getRecipeByID(ID) {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2/${ID}?type=public&app_id=df0dc624&app_key=c75e7ca86e23609d5ca298df3d1a481b`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function findRecipeByID(ID) {
    let result

    await getRecipeByID(ID)
        .then((res) => {
            result = convertOneRecipe(res);
        })
        .catch((err) => {
            console.log(err)
        })

    return result
}
