const mongoose = require("mongoose");
import MONGODB_URI from "./dbConfig";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Connection error:", error);
  }
};
