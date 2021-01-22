const mongoose = require("mongoose");
const { Schema } = mongoose;

const seasonalShoeSchema = new Schema({
  name: {
    type: String,
  },
  model: {
    type: String,
  },
  brand: {
    type: String,
  },
  releaseDate: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  tags: {
    type: [String],
  },

  website: {
    type: [String],
  },
  retailPrice: {
    amount: {
      type: Number,
    },
    currencyCode: {
      type: String,
    },
  },
});

mongoose.model("seasonal-releases", seasonalShoeSchema);
