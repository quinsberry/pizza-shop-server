const Pizza = require('../models/Pizza')

function PizzaController() {}

const create = function (req, res) {
  const data = {
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    types: req.body.types,
    sizes: req.body.sizes,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
  }

  Pizza.create(data, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err,
      })
    }

    res.status(201).json({
      success: true,
      data: doc,
    })
  })
}

const read = function (req, res) {
  Pizza.find({}, function (err, doc) {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err,
      })
    }

    res.status(200).json({
      success: true,
      data: doc,
    })
  })
}

PizzaController.prototype = {
  create,
  read,
}

module.exports = PizzaController
