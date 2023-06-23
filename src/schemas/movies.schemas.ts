import { z } from "zod";

const movieSchemas = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int().positive(),
});

const createMovieSchemas = movieSchemas.omit({ id: true });
const updateMovieSchemas = createMovieSchemas.partial();

export { movieSchemas, createMovieSchemas, updateMovieSchemas };
