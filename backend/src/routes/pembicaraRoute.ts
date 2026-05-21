import express from "express";
import { getpembicara, createpembicara, getpembicaraById, updatePembicaraById, deletePembicaraById } from "../controllers/pembicaraController.js";

const router = express.Router();

router.get("/", getpembicara);
router.post("/", createpembicara);
router.get("/:id", getpembicaraById);
router.put("/:id", updatePembicaraById);
router.delete("/:id", deletePembicaraById);

export default router;
