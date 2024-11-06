import express from 'express'

import cars from './data/cars.json' with { type: 'json'}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Group10: Juan, Wint, Cristopher')
})


app.get('/cars' , (req, res) => {
  res.json(cars)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/cars`)
})