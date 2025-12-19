import express from "express";
import {
  submitContact,
  getContacts
} from "../controllers/ContactController.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", getContacts);

export default router;
