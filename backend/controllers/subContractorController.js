const asyncHandler = require("express-async-handler");
//Database models import here

// @desc Get all subContractors
// @route GET /api/subContractors
// @access Private

const getSubContractors = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all subContractors" });
});

// @desc Get single subContractor
// @route GET /api/subContractors/:id
// @access Private

const getSubContractorById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get single subContractor" });
});

// @desc Create new subContractor
// @route POST /api/subContractors
// @access Private

const createSubContractor = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Create new subContractor" });
});

// @desc Update subContractor
// @route PUT /api/subContractors/:id
// @access Private

const updateSubContractor = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update subContractor" });
});

// @desc Delete subContractor
// @route DELETE /api/subContractors/:id
// @access Private

const deleteSubContractor = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete subContractor" });
});

module.exports = {
  getSubContractors,
  getSubContractorById,
  createSubContractor,
  updateSubContractor,
  deleteSubContractor,
};
