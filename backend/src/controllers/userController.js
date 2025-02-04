import User from '../models/UserModel.js'

export const userController = {
  async add(req, res) {
    try {
      const { user_id, email } = req.user
      const verifyUser = await User.findOne({ where: { id: user_id } })
      if (verifyUser) {
        return res.status(201).json(`User already created`)
      }
      const user = await User.create({ id: user_id, email: email })
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({message: 'The user cannot be created'})
    }
  },
}
