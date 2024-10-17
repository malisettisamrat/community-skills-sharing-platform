import express from "express";

const skillsRouter = express.Router();

// Get all the skills/services..
skillsRouter.get("/skills", (req, res) => {});

// Create a skill/Service..
skillsRouter.post("/skill", (req, res) => {});

// update a skill/service..
skillsRouter.put("/skill/:id", (req, res) => {});

// Delete a skill/service..
skillsRouter.delete("/skill/:id", (req, res) => {});

export default skillsRouter;
