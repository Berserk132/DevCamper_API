const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  // Mongoose Bad ObjectId
  if (err.name === "CastError") {
    const message = `BootCamp not found with id of ${err.value}`;
    err = new ErrorResponse(message, 404);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

module.exports = errorHandler;
