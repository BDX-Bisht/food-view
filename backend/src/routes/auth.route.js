const express = require("express");
const {
  registerUser,
  loginUser,
  logOutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
} = require("../controllers/auth.controller");

const router = express.Router();

// for user auth
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logOutUser);

// fot food patner auth
router.post("/food-partner/register", registerFoodPartner);
router.post("/food-partner/login", loginFoodPartner);
router.get("/food-partner/logout", logoutFoodPartner);

module.exports = router;
