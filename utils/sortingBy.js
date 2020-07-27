const _ = require('lodash')
const sortingBy = (type, arr) => {
  _.orderBy(arr, ['price'], ['asc'])

  switch (type) {
    case 'Popularity':
      return _.orderBy(arr, ['rating'], ['desc'])
    case 'Price':
      return _.orderBy(arr, ['price'], ['asc'])
    case 'Alphabet':
      return _.orderBy(arr, ['name'], ['asc'])
    default:
      return pizzas
  }
}

module.exports = sortingBy
