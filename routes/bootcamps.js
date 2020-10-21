const express = require("express");
const courseRouter = require("./courses");
const router = express.Router({ mergeParams: true });
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const {
  getCourses,
} = require("../controllers/courses");

router.use("/:bootcampId/courses", getCourses);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
