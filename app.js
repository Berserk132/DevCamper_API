const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// create express App
const app = express();

// Body Parser
app.use(express.json());

// import env file
dotenv.config({ path: "./config/config.env" });

// connect to DB
connectDB();
// Middlewares
const morgan = require("morgan");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Routes
const bootcampsRoute = require("./routes/bootcamps");

// Mounte Routes
app.use("/api/v1/bootcamps", bootcampsRoute);

// start the server
const PORT = process.env.PORT || 5000;
const DEV_ENV = process.env.NODE_ENV;

const server = app.listen(
  PORT,
  console.log(`Server running in ${DEV_ENV} mode on port ${PORT}`)
);

// Handle Unhandled Promises Rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
