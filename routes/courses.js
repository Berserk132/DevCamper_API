const express = require("express");
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

const Course = require("../models/Course");

const router = express.Router({ mergeParams: true });

//const advancedResults = require('../middleware/advancedResults');
//const { protect, authorize } = require("../middleware/auth");


router.route("/").get((req, res, next) => console.log("Hello World"));

router.route("/").get(getCourses);

router.route("/:id").get(getCourse);

module.exports = router;
