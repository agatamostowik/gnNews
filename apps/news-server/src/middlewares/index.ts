import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateCountryParamsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const paramsSchema = z.object({
    countryCode: z.enum(["us", "sw", "ua", "pl", "de", "fr"]),
  });

  const querySchema = z.object({
    page: z.preprocess(Number, z.number().min(1)),
    pageSize: z.preprocess(Number, z.number().min(1).max(100)),
  });

  try {
    paramsSchema.parse(req.params);
    querySchema.parse(req.query);
    next();
  } catch (error) {
    res.json({ message: "Invalid params" });
  }
};
