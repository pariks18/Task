import express from "express";
import {
  subscribe,
  getSubscribers
} from "../controllers/NewsLetterController.js";

const router = express.Router();

router.post("/", subscribe);
router.get("/", getSubscribers);

export default router;
