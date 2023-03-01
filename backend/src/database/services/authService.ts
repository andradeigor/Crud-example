import { prismaModel } from "../..";
import bcrypt from "../../lib/bcrypt";
import jwt from "../../lib/jwt";
import { AuthRequest } from "../../types/auth";

export default {
  async loginService(userData: AuthRequest) {
    userData.email = userData.email.toLowerCase();
    const hasUser = await prismaModel.users.findUnique({
      where: { email: userData.email },
    });
    if (!hasUser) {
      return {
        error: true,
        message: "The email address or password is incorrect.",
        content: null,
        status: 400,
      };
    }
    const rightPassword = await bcrypt.decript(
      userData.password,
      hasUser.password
    );
    if (rightPassword) {
      const token = await jwt.CreateToken(hasUser.id);
      return { error: false, message: "Sucess", status: 200, content: token };
    } else {
      return {
        error: true,
        message: "The email address or password is incorrect.",
        content: null,
        status: 400,
      };
    }
  },
};
