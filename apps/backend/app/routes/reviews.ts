import express from "express";

const reviewsRouter = express.Router();

// Get the reviews of an User..
reviewsRouter.get("/reviews", (req, res) => {});

// Post a review on an User..
reviewsRouter.post("/review/:id", (req, res) => {});

export default reviewsRouter;
