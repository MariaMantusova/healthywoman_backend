import express from "express";
import {findRecipesByCuisine} from "./getters/getRecipesByCuisine.js";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/recipes-by-cuisine/:cuisine", (req, res) => {
    findRecipesByCuisine(req.params.cuisine)
        .then((result) => {
            res.status(200).json(result)
        })
})

app.listen(PORT, () => {
    console.log("server started on 5000 port")
});
