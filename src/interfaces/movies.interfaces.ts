import { z } from "zod";
import { createMovieSchemas } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type CreateMovie = z.infer<typeof createMovieSchemas>;
type ReadMovie = Array<Movie>;
type UpdateMovie = DeepPartial<CreateMovie>;

type MovieRepo = Repository<Movie>;

export { CreateMovie, ReadMovie, UpdateMovie, MovieRepo };
