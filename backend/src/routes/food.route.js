const express = require("express");
const router = express.Router();
const {
  foodPartnerAuthMiddleware,
  userAuthMiddleware,
} = require("../middleware/auth.middleware");
const { addFoodItem, getFoodItem } = require("../controllers/food.controller");
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

//****** GET /api/food [protected]  */
router.get("/get", userAuthMiddleware, getFoodItem);

module.exports = router;
