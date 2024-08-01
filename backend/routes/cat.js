import express from 'express'
import { catController } from '../controllers/catController.js'

const router = express.Router()

router.get('/', catController.list)

router.post('/', catController.add)

router.put('/:id', catController.update)

router.delete('/:id', catController.delete)

export default router
