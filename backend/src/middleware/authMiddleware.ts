import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export default {
  async LoginMiddle(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
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
