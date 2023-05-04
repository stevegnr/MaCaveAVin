const mongoose = require("mongoose");

const wineSchema = mongoose.Schema({
  name: { type: String, required: true },
  domain: { type: String, required: true },
  region: { type: String },
  year: { type: Number },
  color: { type: String, required: true },
  price: { type: Number },
  grapeVariety: { type: Array },
  biologic: { type: String },
  bestAfter: { type: Date, default: null },
  bestBefore: { type: Date, default: null },
  country: { type: String, default: "France" },
  tag: { type: String },
});

module.exports = mongoose.model("Wine", wineSchema);
