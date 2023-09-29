import express from "express";
import {
    getRecipesByCalories, getRecipesByMeal,
    getRecipesByCuisine, getRecipesByDiet,
    getRecipesByDishType, getRecipesByKeyword, getRecipesByHealth, getRecipeByID,
} from "../controllers/recipes.js";
import {celebrate, Joi} from "celebrate";

const recipesRouter = express.Router();

recipesRouter.get("/recipes-by-cuisine/:cuisine", celebrate({
    params: Joi.object().keys({
        cuisine: Joi.string().min(5).max(22).regex(/^[a-zA-Z\s]*$/).required(),
    }),
}), getRecipesByCuisine);

recipesRouter.get("/recipes-by-meal/:mealType", celebrate({
    params: Joi.object().keys({
        mealType: Joi.string().min(5).max(12).regex(/^[a-zA-Z]*$/).required(),
    }),
}), getRecipesByMeal);

recipesRouter.get("/recipes-by-diet/:diet", celebrate({
    params: Joi.object().keys({
        diet: Joi.string().min(7).max(13).regex(/^[a-zA-Z-]*$/).required(),
    }),
}), getRecipesByDiet);

recipesRouter.get("/recipes-by-dish/:dishType", celebrate({
    params: Joi.object().keys({
        dishType: Joi.string().min(3).max(23).regex(/^[a-zA-Z\s]*$/).required(),
    }),
}), getRecipesByDishType);

recipesRouter.get("/recipes-by-calories/:calories", celebrate({
    params: Joi.object().keys({
        calories: Joi.string().min(3).max(7).regex( /^[1-9-]*$/).required(),
    }),
}), getRecipesByCalories);

recipesRouter.get("/recipes-by-word/:keyword", celebrate({
    params: Joi.object().keys({
        keyword: Joi.string().min(4).max(20).regex(/^[a-zA-Z-]*$/).required(),
    }),
}), getRecipesByKeyword);

recipesRouter.get("/recipes-by-health/:healthLabel", celebrate({
    params: Joi.object().keys({
        healthLabel: Joi.string().min(4).max(20).regex(/^[a-zA-Z-]*$/).required(),
    }),
}), getRecipesByHealth);

recipesRouter.get("/recipe-by-id/:ID", celebrate({
    params: Joi.object().keys({
        ID: Joi.string().length(32).required(),
    }),
}), getRecipeByID);

export default recipesRouter;
