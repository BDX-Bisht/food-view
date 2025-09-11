const foodItemModel = require("../models/food.model");
const { uploadFile } = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function addFoodItem(req, res) {
  const { name, description } = req.body;
  const foodPartner = req.foodPartner._id;

  const fileUploadResult = await uploadFile(req.file.buffer, uuid());

  const foodItem = await foodItemModel.create({
    name,
    description,
    video: fileUploadResult.url,
    foodPartner,
  });

  return res
    .status(201)
    .json({ message: "Food item added successfully", foodItem });
}

async function getFoodItem(req, res) {
  const foodItems = await foodItemModel.find({});

  res
    .status(200)
    .json({ message: "food items fetched successfully", foodItems });
}

module.exports = { addFoodItem, getFoodItem };
