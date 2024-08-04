export const totalController = (model) => async (req, res) => {
  try {
    const { user_id } = req.user
    const total = await model.count({ where: { user_id: user_id } })
    res.status(200).json(total)
  } catch (error) {
    res.status(400).json({ error: 'Model not found' })
  }
}
