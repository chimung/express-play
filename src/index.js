import { express } from 'express';
import { sequelize } from './models/db.js'

sequelize.sync();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})