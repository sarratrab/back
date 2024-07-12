const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;


