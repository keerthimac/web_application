const express = require("express");
const router = express.Router();
const {
  getSubContractors,
  getSubContractorById,
  createSubContractor,
  updateSubContractor,
  deleteSubContractor,
} = require("../controllers/subContractorController");

router.get("/", getSubContractors);
router.get("/:id", getSubContractorById);
router.post("/", createSubContractor);
router.put("/:id", updateSubContractor);
router.delete("/:id", deleteSubContractor);

module.exports = router;
