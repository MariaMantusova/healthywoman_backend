import express from "express";
import recipesRouter from "./routes/recipesRoutes.js";

const PORT = 5000;

const app = express();
app.use(express.json());

app.use("/", recipesRouter);

app.listen(PORT, () => {
    console.log("server started on 5000 port")
});
