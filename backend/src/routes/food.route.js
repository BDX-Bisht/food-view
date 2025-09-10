const express = require("express");
const router = express.Router();
const { foodPartnerAuthMiddleware } = require("../middleware/auth.middleware");
const { addFoodItem } = require("../controllers/food.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post(
  "/add",
  foodPartnerAuthMiddleware,
  upload.single("video"),
  addFoodItem
);

module.exports = router;
