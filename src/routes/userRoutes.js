import express from "express";
import { getAllUsers } from "../controllers/userControllers.js";
import { newUser } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", getAllUsers);
router.post("/newUser", newUser);

export default router;
