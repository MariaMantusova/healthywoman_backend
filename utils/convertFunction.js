export function convertRecipes(recipes) {
    const convertedRecipes = [];

    recipes.forEach((recipe) => {
        recipe = recipe.recipe

        convertedRecipes.push({
            recipeName: recipe.label,
            recipeImage: recipe.image,
            recipeSource: recipe.url,
            recipeIngredients: recipe.ingredientLines,
            recipeCalories: Math.round(recipe.calories),
            recipeCuisine: recipe.cuisineType,
            recipeMeal: recipe.mealType,
            recipeType: recipe.dishType,
        })
    })

    return convertedRecipes;
}
