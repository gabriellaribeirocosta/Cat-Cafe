import express from 'express'
import { productController } from '../controllers/productController.js'
import { validateAddProduct, validateUpdateProduct, validateDeleteProduct } from '../middlewares/productMiddleware.js'

const router = express.Router()

router.get('/', productController.list)

router.post('/', validateAddProduct, productController.add)

router.put('/:id', validateUpdateProduct, productController.update)

router.delete('/:id', validateDeleteProduct, productController.delete)

export default router
