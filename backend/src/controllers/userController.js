import User from '../models/UserModel.js'

export const userController = {
  async add(req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).send(error)
    }
  },
}
