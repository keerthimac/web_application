const express = require("express");
const router = express.Router();
const {
  getPipeData,
  getFittingData,
} = require("../controllers/plumController");

router.get("/pipe", getPipeData);
router.get("/fitting", getFittingData);

module.exports = router;
