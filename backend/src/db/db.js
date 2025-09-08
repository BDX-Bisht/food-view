const mongoose = require("mongoose");

const mongodb_Uri = process.env.MONGODB_URI;

function connectDb() {
  mongoose
    .connect(mongodb_Uri)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log("MOngoDb connection error: ", err);
    });
}

module.exports = connectDb;
