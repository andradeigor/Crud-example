import express from "express";
import cors from "cors";
import UserRouter from "./routes/userRouter";
import AuthRouter from "./routes/authRouter";
import prisma from "./database/index";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/auth", AuthRouter);
export const prismaModel = prisma;

app.listen(8000, () => {
  console.log("🔥 Hi, I'm running at http://localhost:8000/ 🔥");
});
