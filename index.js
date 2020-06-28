const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bodyParser = require('body-parser')

const { PizzaCtrl } = require('./controllers')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/pizzas', PizzaCtrl.read)
app.post('/pizzas', PizzaCtrl.create)

const PORT = config.get('port') || 5000
async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}..`)
    })
  } catch (e) {
    console.log(`Server Error: ${e.message}`)
    process.exit(1)
  }
}

start()
