import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRouter from './src/routes/product.js'
import catRouter from './src/routes/cat.js'
import userRouter from './src/routes/user.js'
import getTotalRouter from './src/routes/getTotal.js'
import sequelize from './src/database/db-config.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/product', productRouter)
app.use('/cat', catRouter)
app.use('/user', userRouter)
app.use('/get-total', getTotalRouter)

const PORT = 3000

sequelize.sync().then(
  app.listen(PORT, () => {
    console.info(`Server running on http://localhost:${PORT}`)
  }),
)
