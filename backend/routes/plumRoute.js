const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingData,
  getPressureFittingInfo,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/fitting/:type/:brand", getFittingData);

module.exports = router;
