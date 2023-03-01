import { Request, Response } from "express";
import userService from "../database/services/userService";
import { User } from "../types/user";

type UserServiceReturn = {
  error: boolean;
  message: string;
  content: User | null;
  status: number;
};

export default {
  async CreateUser(req: Request, res: Response) {
    const UserServiceReturn: UserServiceReturn = await userService.CreateUser(
      req.body
    );
    return res
      .status(UserServiceReturn.status)
      .json({
        message: UserServiceReturn.message,
        data: UserServiceReturn.content,
      });
  },
};
