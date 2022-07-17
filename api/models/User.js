const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
        prodprice: { type: Number },
        prodimg: { type: String },
        ProdName: { type: String }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);