import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default class ValidatorHelper {
  static validate(schema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body)

      if (error) {
        return res.status(400).json({
          message: error.details[0].message
        });
      }

      next();
    }
  }
}