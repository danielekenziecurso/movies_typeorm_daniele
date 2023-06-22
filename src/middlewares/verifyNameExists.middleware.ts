import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MovieRepo } from "../interfaces";
import { Movie } from "../entities";
import { errors } from "../errors";

const verifyNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const name: string = req.body.name;

  if (!name) {
    return next();
  }
  const movieExists: boolean = await repo.exist({ where: { name } });

  if (movieExists) {
    throw new errors.Conflict("Movie already exists.", 409);
  }

  return next();
};

export default verifyNameExistsMiddleware;
