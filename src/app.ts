import { moviesRouter } from './routers/movies.router';
import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/movies", moviesRouter);

app.use(middlewares.handleError);

export default app;