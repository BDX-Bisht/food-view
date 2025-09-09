const express = require("express");
const router = express.Router();
const { foodPartnerAuthMiddleware } = require("../middleware/auth.middleware");
const { addFoodItem } = require("../controllers/food.controller");

router.post("/add", foodPartnerAuthMiddleware, addFoodItem);

module.exports = router;
