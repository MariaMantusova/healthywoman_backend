export function convertRecipes(recipes) {
    const convertedRecipes = [];

    recipes.forEach((outerRecipe) => {
        const recipe = outerRecipe.recipe

        convertedRecipes.push({
            recipeName: recipe.label,
            recipeImage: recipe.image,
            recipeSource: recipe.url,
            recipeIngredients: recipe.ingredientLines,
            recipeCalories: Math.round(recipe.calories),
            recipeCuisine: recipe.cuisineType,
            recipeMeal: recipe.mealType,
            recipeType: recipe.dishType,
            recipeID: outerRecipe._links.self.href
        })
    })

    return convertedRecipes;
}
