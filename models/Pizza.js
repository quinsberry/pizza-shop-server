const { Schema, model } = require('mongoose')

const schema = new Schema({
  imageUrl: String,
  name: String,
  types: Array,
  sizes: Array,
  price: Number,
  category: String,
  rating: Number,
})

module.exports = model('Pizza', schema)
