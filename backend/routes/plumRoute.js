const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingPriceData,
  getBrands,
  getFittingData,
  getPlumFittingTypes,
  getPlumPipeTypes,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/brands", getBrands);
router.get("/fitting/:plumTypeId", getFittingData);
router.get("/plum_fitting_type", getPlumFittingTypes);
router.get("/plum_pipe_type", getPlumPipeTypes);
router.get("/fitting/:plumTypeId/:brandId", getFittingPriceData);

module.exports = router;
