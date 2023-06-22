import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const validateBodyMiddleware =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validated = schema.parse(req.body);
    req.body = validated;

    return next();
  };

export default validateBodyMiddleware;
