const express = require("express");

const notificationsRouter = express.Router();

// Sending a push notification to the user..
notificationsRouter.post("/send", (req, res) => {});

module.exports = notificationsRouter;
