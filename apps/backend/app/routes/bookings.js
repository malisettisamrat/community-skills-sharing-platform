const express = require("express");

// Create a Booking Router..
const bookingsRouter = express.Router();

// Get all the bookings of an User..
bookingsRouter.get("/bookings", (req, res) => {});

// Create a booking for a user..
bookingsRouter.post("/booking", (req, res) => {});

// Update a booking..
bookingsRouter.put("/booking/:id", (req, res) => {});

// Delete a booking..
bookingsRouter.delete("/booking/:id", (req, res) => {});

module.exports = bookingsRouter;
