const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },

  adminId: {
    type: Schema.Types.ObjectId,
  },

  id: {
    type: String,
  },

  companyName: {
    type: String,
  },

  adminName: {
    type: String,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
  },

  confirmPassword: {
    type: String,
  },
});

export const adminModel = model("AdminUser", adminSchema);
