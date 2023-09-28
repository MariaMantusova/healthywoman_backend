import express from "express";
import {findRecipesByType} from "./getters/getRecipesByType.js";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/recipes-by-cuisine/:cuisine", (req, res) => {
    findRecipesByType("cuisineType", req.params.cuisine)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.get("/recipes-by-meal/:mealType", (req, res) => {
    findRecipesByType("mealType", req.params.mealType)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.get("/recipes-by-diet/:diet", (req, res) => {
    findRecipesByType("diet", req.params.diet)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.get("/recipes-by-dish/:dishType", (req, res) => {
    findRecipesByType("dishType", req.params.dishType)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.get("/recipes-by-calories/:calories", (req, res) => {
    findRecipesByType("calories", req.params.calories)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.get("/recipes-by-word/:keyword", (req, res) => {
    findRecipesByType("q", req.params.keyword)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.listen(PORT, () => {
    console.log("server started on 5000 port")
});
