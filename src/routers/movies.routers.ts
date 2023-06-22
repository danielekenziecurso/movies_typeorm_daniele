import { Router } from "express";
import { moviesControllers } from "../controllers";
import middlewares from "../middlewares";
import { createMovieSchemas, updateMovieSchemas } from "../schemas";

const clientMovie: Router = Router();

clientMovie.post(
  "",
  middlewares.validateBodyMiddleware(createMovieSchemas),
  middlewares.verifyNameExistsMiddleware,
  moviesControllers.createMovie
);

clientMovie.get(
  "",
  middlewares.paginationMiddleware,
  moviesControllers.readMovie
);

clientMovie.patch(
  "/:id",
  middlewares.validateBodyMiddleware(updateMovieSchemas),
  middlewares.verifyIdExistsMiddleware,
  middlewares.verifyNameExistsMiddleware,
  moviesControllers.updateMovie
);

clientMovie.delete(
  "/:id",
  middlewares.verifyIdExistsMiddleware,
  moviesControllers.deleteMovie
);

export default clientMovie;
