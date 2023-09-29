import express from "express";
import recipesRouter from "./routes/recipesRoutes.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

const PORT = 5000;

app.use(express.json());

app.use(helmet());
app.use(limiter);

app.use("/", recipesRouter);

app.listen(PORT, () => {
    console.log("server started on 5000 port")
});
