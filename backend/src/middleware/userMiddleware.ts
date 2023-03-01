import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default {
  async CreateUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    const options = {
      abortEarly: false,
    };
    const { error } = schema.validate(req.body, options);
    if (error) {
      const errorMessages = error.details.map(({ message }) =>
        message.replaceAll('"', "")
      );
      res.status(400).json({
        error: `Validation error: ${errorMessages.join(", ")}`,
      });
    } else {
      next();
    }
  },
};
