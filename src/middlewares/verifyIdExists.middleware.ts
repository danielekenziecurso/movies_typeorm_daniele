import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MovieRepo } from "../interfaces";
import { Movie } from "../entities";
import { errors } from "../errors";

const verifyIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieId: number = Number(req.params.id);

  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await repo.findOneBy({ id: movieId });

  if (!movie) throw new errors.NotFound("Movie not found", 404);

  res.locals = { ...res.locals, movie };

  return next();
};

export default verifyIdExistsMiddleware;
