import express from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  oneUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", oneUser);

export default router;
