import { prismaModel } from "../../index";
import bcrypt from "../../lib/bcrypt";
import jwt from "../../lib/jwt";
import { UserRequest } from "../../types/user";

export default {
  async CreateUser(userData: UserRequest) {
    userData.email = userData.email.toLowerCase();
    const hasEmail = await prismaModel.users.findUnique({
      where: { email: userData.email },
    });
    return hasEmail
      ? {
          error: true,
          message: "Email Already used",
          content: null,
          status: 400,
        }
      : this.CreateUserWithBcrypt(userData);
  },
  async CreateUserWithBcrypt(userData: UserRequest) {
    const hashedPassword: string = await bcrypt.encrypt(userData.password);
    const newUser = await prismaModel.users.create({
      data: { ...userData, password: hashedPassword },
    });
    const userToken = await jwt.CreateToken(newUser.id);
    const content = { ...newUser, token: userToken, password: null };
    return { error: false, message: "User Created", content, status: 201 };
  },
};
