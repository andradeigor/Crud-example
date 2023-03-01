import { Request, Response } from "express";
import authService from "../database/services/authService";

type AuthServiceReturn = {
  error: boolean;
  message: string;
  content: string | null;
  status: number;
};

export default {
  async LoginUser(req: Request, res: Response) {
    const AuthServiceReturn: AuthServiceReturn = await authService.loginService(
      req.body
    );
    return res.status(AuthServiceReturn.status).json({
      message: AuthServiceReturn.message,
      data: AuthServiceReturn.content,
    });
  },
};
