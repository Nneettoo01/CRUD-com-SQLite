import express from "express";
import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  oneUser,
  registerUser,
  login,
} from "../controllers/userControllers.js";
import { validate } from "../middleware/validate.js";
import {
  createUserSchema,
  loginSchema,
  updatedUserSchema,
} from "../schemas/userSchemas.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", validate(createUserSchema), createUser);
router.put("/:id", validate(updatedUserSchema), updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", oneUser);
router.post("/register", registerUser);
router.post("/login", validate(loginSchema), login);

export default router;
