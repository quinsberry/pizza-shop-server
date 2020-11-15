const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bodyParser = require('body-parser')
const cors = require('cors')

const { PizzaCtrl } = require('./controllers')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/api/pizzas', PizzaCtrl.all)
app.post('/api/pizzas', PizzaCtrl.create)
app.patch('/api/pizzas/:id', PizzaCtrl.update)

const PORT = process.env.PORT || 8080
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
