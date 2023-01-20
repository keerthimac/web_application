const express = require("express");
const router = express.Router();
const { getPlumData } = require("../controllers/plumController");

router.get("/", getPlumData);

module.exports = router;
