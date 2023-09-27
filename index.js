import express from "express";
import {recipes} from "./getters/getRecipesByCuisine.js";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/recipes-by-cuisine", (req, res) => {
    res.status(200).json(recipes)
})

app.listen(PORT, () => {
    console.log("server started on 5000 port")
});
