import express from "express";
import {findRecipesByType} from "../controllers/getRecipesByType.js";
import {findRecipeByID} from "../controllers/getRecipeByID.js";

const recipesRouter = express.Router();

recipesRouter.get("/recipes-by-cuisine/:cuisine", (req, res) => {
    findRecipesByType("cuisineType", req.params.cuisine)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-meal/:mealType", (req, res) => {
    findRecipesByType("mealType", req.params.mealType)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-diet/:diet", (req, res) => {
    findRecipesByType("diet", req.params.diet)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-dish/:dishType", (req, res) => {
    findRecipesByType("dishType", req.params.dishType)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-calories/:calories", (req, res) => {
    findRecipesByType("calories", req.params.calories)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-word/:keyword", (req, res) => {
    findRecipesByType("q", req.params.keyword)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipes-by-health/:healthLabel", (req, res) => {
    findRecipesByType("health", req.params.healthLabel)
        .then((result) => {
            res.status(200).json(result)
        })
})

recipesRouter.get("/recipe-by-id/:ID", (req, res) => {
    findRecipeByID(req.params.ID)
        .then((result) => {
            res.status(200).json(result)
        })
})


export default recipesRouter;
