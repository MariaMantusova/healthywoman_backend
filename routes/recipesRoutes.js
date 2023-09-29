import express from "express";
import {findRecipeByID} from "../apiGetters/getRecipeByID.js";
import {
    getRecipesByCalories, getRecipesByMeal,
    getRecipesByCuisine, getRecipesByDiet,
    getRecipesByDishType, getRecipesByKeyword, getRecipesByHealth, getRecipeByID,
} from "../controllers/recipes.js";

const recipesRouter = express.Router();

recipesRouter.get("/recipes-by-cuisine/:cuisine", getRecipesByCuisine);
recipesRouter.get("/recipes-by-meal/:mealType", getRecipesByMeal);
recipesRouter.get("/recipes-by-diet/:diet", getRecipesByDiet);
recipesRouter.get("/recipes-by-dish/:dishType", getRecipesByDishType);
recipesRouter.get("/recipes-by-calories/:calories", getRecipesByCalories);
recipesRouter.get("/recipes-by-word/:keyword", getRecipesByKeyword);
recipesRouter.get("/recipes-by-health/:healthLabel", getRecipesByHealth);

recipesRouter.get("/recipe-by-id/:ID", getRecipeByID);

export default recipesRouter;
