import { Router } from "express";
import authControler from "../controller/authControler";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.post("/", authMiddleware.LoginMiddle, authControler.LoginUser);

export default router;
