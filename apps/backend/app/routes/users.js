const express = require("express");

// creating an express router for Users..
const usersRouter = express.Router();

// User registration
usersRouter.post("/register", (req, res) => {});

// User Login
usersRouter.post("/signin", (req, res) => {});

// Get the user profile..
usersRouter.get("/profile", (req, res) => {});

// Upadate a user profile..
usersRouter.put("/profile", (req, res) => {});

module.exports = usersRouter;
