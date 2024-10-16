const express = require("express");

// import all the routers..
const usersRouter = require("./routes/users");
const skillsRouter = require("./routes/skills");
const bookingsRouter = require("./routes/bookings");
const notificationsRouter = require("./routes/notifications");
const reviewsRouter = require("./routes/reviews");

// Define the express
const app = express();

// Define the specific Routers...
app.use("/api/v1/user", usersRouter);
app.use("/api/v1/skill", skillsRouter);
app.use("/api/v1/booking", bookingsRouter);
app.use("/api/v1/notification", notificationsRouter);
app.use("/api/v1/review", reviewsRouter);

// export the app
module.exports = app;
