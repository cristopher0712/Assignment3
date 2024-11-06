import express from 'express'

//we need to import de json data
import employees from './data/employees.json' with { type: 'json'}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Group10: Juan, Wint, Cristopher')
})


// http://localhost:3000/employees
app.get('/employees' , (req, res) => {
  res.json(employees)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})