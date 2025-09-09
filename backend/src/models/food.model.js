const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    foodPartner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foodpartner",
    },
  },
  { timestamps: true }
);

const foodItemModel = new mongoose.model("food", foodSchema);
module.exports = foodItemModel;
