const { Schema, model } = require("mongoose");

const driverBackUpSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  drivers: {
    type: Array,
  },
});

export const driverBackUpModel = model("DriverBackUpUser", driverBackUpSchema);
