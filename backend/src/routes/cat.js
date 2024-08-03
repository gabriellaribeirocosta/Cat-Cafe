import express from 'express'
import { catController } from '../controllers/catController.js'
import {
  validateAddCat,
  validateUpdateCat,
  validateDeleteCat,
} from '../middlewares/catMiddleware.js'

const router = express.Router()

router.get('/', catController.list)

router.post('/', validateAddCat, catController.add)

router.put('/:id', validateUpdateCat, catController.update)

router.delete('/:id', validateDeleteCat, catController.delete)

export default router
