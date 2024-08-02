export const getTotalController = (model) => async (req, res) => {
  try {
    const total = await model.count()
    res.status(200).json(total)
  } catch (error) {
    res.status(400).json({ error: 'Model not found' })
  }
}
