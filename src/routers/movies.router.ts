import { Router } from "express";
import { movieControllers } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

export const moviesRouter: Router = Router();

moviesRouter.post("", middlewares.validateBody(movieCreateSchema), middlewares.verifyNameExists, movieControllers.create);

moviesRouter.get("", middlewares.pagination, movieControllers.read);

moviesRouter.use("/:id", middlewares.verifyIdExists);

moviesRouter.patch("/:id", middlewares.validateBody(movieUpdateSchema), middlewares.verifyNameExists, movieControllers.update);

moviesRouter.delete("/:id", movieControllers.destroy);