import express from "express";

const notificationsRouter = express.Router();

// Sending a push notification to the user..
notificationsRouter.post("/send", (req, res) => {});

export default notificationsRouter;
