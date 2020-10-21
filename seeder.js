const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Bootcamp = require("./models/Bootcamp");
const Courses = require("./models/Course");

// connect to db

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON File
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, "utf-8")
);

const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/courses.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    await Courses.create(courses);
    console.log("Data Imported Successfully !!!!!!!!!!!!!!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete from DB
const deletetData = async () => {
  try {
    await Bootcamp.deleteMany();
    await Courses.deleteMany();
    console.log("Data Deleted Successfully !!!!!!!!!!!!!!");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// get user choice
const userChoice = process.argv[2];

console.log(userChoice);

if (userChoice === "-i") {
  importData();
} else if (userChoice === "-d") {
  deletetData();
}
