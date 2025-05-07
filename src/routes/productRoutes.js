import express from "express";
import {
  createProduct,
  getAllProducts,
  oneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { validate } from "../middleware/validate.js";
import { createProductSchema } from "../schemas/productSchemas.js";

const router = express.Router();

router.post("/", validate(createProductSchema), createProduct);
router.get("/", getAllProducts);
router.get("/:id", oneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
