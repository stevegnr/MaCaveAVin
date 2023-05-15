const mongoose = require("mongoose");

const wineSchema = mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String },
  region: { type: String },
  year: { type: Number },
  color: { type: String, required: true },
  price: { type: Number },
  biologic: { type: String },
  bestAfter: { type: Number, default: null },
  bestBefore: { type: Number, default: null },
  country: { type: String },
  tag: { type: String },
  quantity: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model("Wine", wineSchema);
