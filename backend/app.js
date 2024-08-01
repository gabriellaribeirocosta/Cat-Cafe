import express from 'express'
import bodyParser from 'body-parser'
import productRouter from './src/routes/product.js'
import catRouter from './src/routes/cat.js'
import userRouter from './src/routes/user.js'

const app = express()

app.use(bodyParser.json())
app.use('/product', productRouter)
app.use('/cat', catRouter)
app.use('/user', userRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`)
})
