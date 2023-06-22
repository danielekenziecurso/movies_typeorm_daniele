import "express-async-errors";
import express, { Application } from "express";
import { clientMovie } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(express.json());

app.use("/movies", clientMovie);

app.use(middlewares.handleErrorMiddleware);

export default app;
