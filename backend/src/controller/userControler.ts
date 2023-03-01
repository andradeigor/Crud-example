import { Request, Response } from "express";

export default {
  async CreateUser(req: Request, res: Response) {
    return res.status(200).json({ message: "ok2" });
  },
};
