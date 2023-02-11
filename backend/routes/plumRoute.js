const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingData,
  getPressureFittingInfo,
  getBrands,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/brands", getBrands);
router.get("/fitting/:type/:brand", getFittingData);

module.exports = router;
