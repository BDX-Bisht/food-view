const foodItemModel = require("../models/food.model");

async function addFoodItem(req, res) {
  const { name, video, description, foodPartner, id } = req.body;
  res.json(req.foodPartner);
}

module.exports = { addFoodItem };
