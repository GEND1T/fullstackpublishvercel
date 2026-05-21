import express from "express";
import { getEvents, createEvent, showEventById, updateEventById, deleteEventById } from "../controllers/eventController.js";


const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", showEventById);
router.put("/:id", updateEventById);
router.delete("/:id", deleteEventById);

export default router;