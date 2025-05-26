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
import { authenticate } from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", validate(createUserSchema), createUser);
router.put("/:id", authenticate, validate(updatedUserSchema), updateUser);
router.delete("/:id", authenticate, deleteUser);
router.get("/:id", oneUser);
router.post("/register", registerUser);
router.post("/login", validate(loginSchema), login);

export default router;
