const Pizza = require('../models/Pizza')
const sortingBy = require('../utils/sortingBy')

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
    })
  })
}

const update = function (req, res) {
  const pizzaId = req.params.id

  const data = {
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    types: req.body.types,
    sizes: req.body.sizes,
    price: req.body.price,
    category: req.body.category,
    rating: req.body.rating,
  }

  Pizza.updateOne({ _id: pizzaId }, { $set: data }, function (err, doc) {
    if (!doc) {
      return res.status(404).json({
        success: false,
        message: 'PIZZA_NOT_FOUND',
      })
    }

    if (err) {
      return res.status(500).json({
        success: false,
        message: err,
      })
    }

    res.status(200).json({
      success: true,
    })
  })
}

const all = function (req, res) {
  const categories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Compact']
  const sortsBy = ['popularity', 'price', 'alphabet']

  if (req.query.category || req.query.sortBy) {
    const category = req.query.category
    const sortBy = req.query.sortBy

    if (category && sortBy) {
      const types = ['Popularity', 'Price', 'Alphabet']
      Pizza.find({ category: category }, function (err, doc) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err,
          })
        }
        if (!doc.length) {
          return res.status(404).json({
            success: false,
            message: 'CATEGORY_NOT_FOUND',
          })
        }

        if (!types.includes(sortBy)) {
          return res.status(404).json({
            success: false,
            message: 'Type not found',
          })
        }

        res.status(200).json({
          success: true,
          data: sortingBy(sortBy, doc),
        })
      })
    } else if (category) {
      Pizza.find({ category }, function (err, doc) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err,
          })
        }

        if (!doc.length) {
          console.log('doc: ', doc)
          return res.status(404).json({
            success: false,
            message: 'CATEGORY_NOT_FOUND',
          })
        }

        res.status(200).json({
          success: true,
          data: doc,
        })
      })
    } else if (sortBy) {
      const types = ['Popularity', 'Price', 'Alphabet']
      Pizza.find({}, function (err, doc) {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err,
          })
        }
        if (!types.includes(sortBy)) {
          return res.status(404).json({
            success: false,
            message: 'Type not found',
          })
        }

        res.status(200).json({
          success: true,
          sortedBy: sortBy,
          data: sortingBy(sortBy, doc),
        })
      })
    }
  } else {
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
}

PizzaController.prototype = {
  create,
  all,
  update,
}

module.exports = PizzaController
