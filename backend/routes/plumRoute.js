const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingData,
  getPressureFittingInfo,
  getBrands,
  getPlumTypes,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/brands", getBrands);
router.get("/plum_type", getPlumTypes);
router.get("/fitting/:type/:brand", getFittingData);

module.exports = router;
