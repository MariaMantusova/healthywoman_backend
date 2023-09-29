import express from "express";
import recipesRouter from "./routes/recipesRoutes.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import {errorLogger, requestLogger} from "./middlewares/logger.js";
import {errors} from "celebrate";
import {handleError} from "./utils/errorChecking.js";

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

const PORT = 5000;

app.use(express.json());

app.use(requestLogger);

app.use(helmet());
app.use(limiter);

app.use("/", recipesRouter);

app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
    const { statusCode = 500, message } = handleError(err);

    res
        .status(statusCode)
        .send({
            message: statusCode === 500
                ? 'На сервере произошла ошибка'
                : message,
        });
});

app.listen(PORT);
