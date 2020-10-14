const BootCamps = require("../models/Bootcamp");

// @desc    GET all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootCamps.find({});
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    GET single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamps.findById(req.params.id);
    if (!bootcamp) {
      res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc    create single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamps.create(req.body);

    res
      .status(200)
      .json({ success: true, msg: "create a single bootcamp", data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await BootCamps.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!bootcamp) {
    res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({ success: true, data: bootcamp });
};

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  const bootcamp = await BootCamps.findByIdAndDelete(req.params.id, req.body);

  if (!bootcamp) {
    res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({ success: true, data: {} });
};
