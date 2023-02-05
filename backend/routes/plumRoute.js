const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingData,
  getPressureFittingInfo,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/fitting", getFittingData);
router.get("/pressure_fitting_info", getPressureFittingInfo);

module.exports = router;
