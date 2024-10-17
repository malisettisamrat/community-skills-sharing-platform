import express from "express";

// import all the routers..
import usersRouter from "./routes/users";
import skillsRouter from "./routes/skills";
import bookingsRouter from "./routes/bookings";
import notificationsRouter from "./routes/notifications";
import reviewsRouter from "./routes/reviews";

// Define the express
const app = express();

// Define the specific Routers...
app.use("/api/v1/user", usersRouter);
app.use("/api/v1/skill", skillsRouter);
app.use("/api/v1/booking", bookingsRouter);
app.use("/api/v1/notification", notificationsRouter);
app.use("/api/v1/review", reviewsRouter);

// export the app
export default app;
