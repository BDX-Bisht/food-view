const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model");

const jsonSecret = process.env.JWT_SECRET;

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExist) {
    return res.status(400).json({ message: "User already exist." });
  }

  const hashPasssword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    passsword: hashPasssword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    jsonSecret
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User register successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });

  try {
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isPasswordVadlid = await bcrypt.compare(password, user.passsword);

  if (!isPasswordVadlid) {
    return res.status(400).json({ messsage: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, jsonSecret);

  res.cookie("token", token);

  res.status(200).json({
    messsage: "User logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function logOutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logout successfully",
  });
}

async function registerFoodPartner(req, res) {
  const { name, email, password } = req.body;

  const isUserAlreadyExist = await foodPartnerModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({ message: "Food partner alreadt exist" });
  }

  const hashPasssword = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    email,
    name,
    password: hashPasssword,
  });

  const token = jwt.sign({ id: foodPartner._id }, jsonSecret);

  res.cookie("token", token);
  res.status(200).json({
    message: "Food partner registered successfully",
    foodPartner: {
      _id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
    },
  });
}

async function loginFoodPartner(req, res) {
  const { email, passsword } = req.body;

  const foodPartner = await foodPartnerModel.findOne({ email });

  if (!foodPartner) {
    return res.status(400).json({ message: "Food partner not found" });
  }

  const verifyPassword = await bcrypt.compare(passsword, foodPartner.password);

  if (!verifyPassword) {
    return res.status(400).json({ message: "Incorrect password" });
  }

  const token = jwt.sign({ id: foodPartner._id }, jsonSecret);

  res.cookie("token", token);
  res.status(200).json({
    message: "Food partner login sucessfully",
    foodPartner: {
      _id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
    },
  });
}

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200), json({ message: "Food partner logout successfully" });
}

module.exports = {
  registerUser,
  loginUser,
  logOutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
