const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");

const jsonSecret = process.env.JWT_SECRET;

async function foodPartnerAuthMiddleware(req, res, next) {
  // get token value
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Authorization failed" });
  }

  try {
    // verfiy token
    const decodeToken = jwt.verify(token, jsonSecret);

    const foodPartner = await foodPartnerModel.findById(decodeToken.id);
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Something went wrong".error });
  }
}

module.exports = { foodPartnerAuthMiddleware };
