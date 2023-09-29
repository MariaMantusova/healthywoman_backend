import axios from 'axios';
import { convertRecipes } from '../utils/convertFunctions.js';
import NotFoundError from '../errors/NotFoundError.js';

async function getRecipesByType(nameOfType, type) {
  try {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?app_id=df0dc624&app_key=c75e7ca86e23609d5ca298df3d1a481b&type=public&${nameOfType}=${type}`);
    return response.data.hits;
  } catch (error) {
    throw new Error(error.code);
  }
}

export default async function findRecipesByType(nameOfType, type) {
  let result;

  await getRecipesByType(nameOfType, type)
    .then((res) => {
      if (res.length < 1) {
        throw new NotFoundError();
      }

      result = convertRecipes(res);
    })
    .catch((err) => {
      if (err.message !== 'Not found') {
        throw new Error(err.message || err.code);
      } else {
        throw new NotFoundError();
      }
    });

  return result;
}
