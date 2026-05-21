import express from "express";
import { getCategories, createCategories,showCategoryById, updateCategoryById, deleteCategoryById } from "../controllers/categoryControllers.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", createCategories);
router.get("/:id", showCategoryById);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);
export default router;