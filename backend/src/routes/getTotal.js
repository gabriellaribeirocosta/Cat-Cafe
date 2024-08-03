import { getTotalController } from '../controllers/getTotalController.js'
import express from 'express'
import ProductModel from '../models/ProductModel.js'
import CatModel from '../models/CatModel.js'

const router = express.Router()

router.get('/product', getTotalController(ProductModel))

router.get('/cat', getTotalController(CatModel))

export default router
