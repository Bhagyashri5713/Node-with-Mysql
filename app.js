require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user_router");
const gpsRouter = require("./api/gps_fetch/gps_router");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/gps", gpsRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server is up and running on:", process.env.APP_PORT);
});
