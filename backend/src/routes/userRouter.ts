import { Router } from "express";
import userControler from "../controller/userControler";
import userMiddleware from "../middleware/userMiddleware";

const router = Router();

router.post("/", userMiddleware.CreateUserMiddleware, userControler.CreateUser);

export default router;
