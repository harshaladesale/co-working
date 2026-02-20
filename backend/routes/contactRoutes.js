
import express from "express";
import { getAllContacts } from "../controllers/contactController.js";

const router = express.Router();
router.get("/", getAllContacts);

export default router;
