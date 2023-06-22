import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { errors } from "../errors";

const handleErrorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof errors.AppError) {
    return res.status(error.status).json({ message: error.message });
  }

  if (error instanceof z.ZodError) {
    return res.status(400).json({message: error.flatten().fieldErrors});
  }

  console.error(error);
  return res.status(500).json({ error: "Internal server error" });
};

export default handleErrorMiddleware;
