import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesServices } from "../services";
import { Pagination, ReadMovie, UpdateMovie } from "../interfaces";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await moviesServices.createMovie(req.body);
  return res.status(201).json(movie);
};
const readMovie = async (req: Request, res: Response): Promise<Response> => {
  const pagination: Pagination = await moviesServices.readMovie(
    res.locals.pagination
  );
  return res.status(200).json(pagination);
};
const updateMovie = async (req: Request, res: Response): Promise<Response> => {
  const payload: UpdateMovie = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await moviesServices.updateMovie(foundMovie, payload);

  return res.status(200).json(movie);
};

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
  await moviesServices.deleteMovie(res.locals.movie);
  return res.status(204).json();
};

export default { createMovie, readMovie, updateMovie, deleteMovie };
