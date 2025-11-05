import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import { validateProduct } from "../middleware/validateProduct.js";
import { authRequired } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
// Protect creation, update and delete routes
router.post("/", authRequired, validateProduct, createProduct);
router.put("/:id", authRequired, validateProduct, updateProduct);     // or router.patch
router.delete("/:id", authRequired, deleteProduct);

export default router;