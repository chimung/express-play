import express from 'express';
import { sequelize } from './db'

sequelize.sync().then(() => {
    console.log("Connect DB success")
})
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})