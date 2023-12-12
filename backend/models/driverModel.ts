const { Schema, model } = require("mongoose");

const driverSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  driverId: {
    type: Schema.Types.ObjectId,
  },
  id: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  houseNum: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  city: {
    type: String,
  },
  licenseNumber: {
    type: String,
  },
  licenseValidity: {
    type: Date,
  },
  licenseType: {
    type: String,
  },
  typeValidity: {
    type: Date,
  },
  codeNum: {
    type: String,
  },
  codeNumValidity: {
    type: Date,
  },
  driverCardNum: {
    type: String,
  },
  driverCardValidity: {
    type: Date,
  },
});

export const driverModel = model("Driver", driverSchema);
