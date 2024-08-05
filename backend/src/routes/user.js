import express from 'express'
import { userController } from '../controllers/userController.js'
import { validateAddUser } from '../middlewares/userMiddleware.js'

const router = express.Router()

router.post('/', validateAddUser, userController.add)

export default router
