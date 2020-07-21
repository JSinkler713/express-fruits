const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  readyToEat: {
    type: Boolean,
    default: false,
  },
  }, {timestamps: true});

//const Fruit = mongoose.model('Fruit', FruitSchema);
//
module.exports = mongoose.model('Fruit', FruitSchema)
