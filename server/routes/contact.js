import express from "express";
import { validationResult } from "express-validator";
import { contactValidation } from "../utils/validators.js";

const router = express.Router();

router.post("/", contactValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.json({ message: "Message received!" });
});

export default router;