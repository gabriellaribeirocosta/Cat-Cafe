import { totalController } from '../controllers/totalController.js'
import express from 'express'
import ProductModel from '../models/ProductModel.js'
import CatModel from '../models/CatModel.js'

const router = express.Router()

router.get('/product', totalController(ProductModel))

router.get('/cat', totalController(CatModel))

export default router
