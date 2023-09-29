export function convertRecipes(recipes) {
  const convertedRecipes = [];

  recipes.forEach((outerRecipe) => {
    const { recipe } = outerRecipe;
    const id = outerRecipe._links.self.href.slice(38, 70);

    convertedRecipes.push({
      recipeName: recipe.label,
      recipeImage: recipe.image,
      recipeIngredients: recipe.ingredientLines,
      recipeCalories: Math.round(recipe.calories),
      recipeID: id,
    });
  });

  return convertedRecipes;
}

export function convertOneRecipe(outerRecipe) {
  const { recipe } = outerRecipe;
  const recipeIngredients = [];

  recipe.ingredients.forEach((ingredient) => {
    recipeIngredients.push({
      nameOfIngredient: ingredient.text,
      ingredientWeight: ingredient.weight,
      ingredientPhoto: ingredient.image,
    });
  });

  return {
    recipeName: recipe.label,
    recipeImage: recipe.image,
    recipeSource: recipe.url,
    recipeCalories: Math.round(recipe.calories),
    recipeCuisine: recipe.cuisineType,
    recipeMeal: recipe.mealType,
    recipeType: recipe.dishType,
    recipeDiets: recipe.dietLabels,
    recipeHealthy: recipe.healthLabels,
    recipeIngredientsDetails: recipeIngredients,
  };
}
