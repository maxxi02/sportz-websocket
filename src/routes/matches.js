import { Router } from "express";
import { createMatchSchema } from "../validations/matches.js";

export const matchesRouter = Router();

matchesRouter.get("/", (req, res) => {
  res.status(200).json({ message: "This is the matches endpoint." });
});

matchesRouter.post("/", (req, res) => {
  const parsed = createMatchSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid payload.",
      details: JSON.stringify(parsed.error),
    });
  }

  try {
  } catch (error) {
    res.status(500).json({
      error: "Failed to create match.",
      details: JSON.stringify(error),
    });
  }
});
