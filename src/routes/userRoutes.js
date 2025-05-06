import express from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  oneUser,
} from "../controllers/userControllers.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema, updatedUserSchema } from "../schemas/userSchemas.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", validate(createUserSchema), createUser);

router.put("/:id", validate(updatedUserSchema), updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", oneUser);

export default router;
