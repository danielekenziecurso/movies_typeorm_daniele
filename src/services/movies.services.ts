import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  CreateMovie,
  MovieRepo,
  Pagination,
  PaginationParams,
  UpdateMovie,
} from "../interfaces";

const createMovie = async (paylaod: CreateMovie): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);

  const movie: Movie = await repo.save(paylaod);

  return movie;
};

const readMovie = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: PaginationParams): Promise<Pagination> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);

  const [movies, count]: [Movie[], number] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const updateMovie = async (
  movie: Movie,
  payload: UpdateMovie
): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  return await repo.save({ ...movie, ...payload });
};

const deleteMovie = async (movie: Movie): Promise<void> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  await repo.remove(movie);
};

export default { createMovie, readMovie, updateMovie, deleteMovie };
