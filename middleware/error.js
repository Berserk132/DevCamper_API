const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  console.log(error);

  // Mongoose Bad ObjectId
  if (err.name === "CastError") {
    const message = `BootCamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }
  // Mongodb duplicate key
  if (err.name === "MongoError") {
    const message = `Mongodb Dublicate Value`;
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
