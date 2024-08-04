import Product from '../models/ProductModel.js'

export const productController = {
  async list(req, res) {
    try {
      const { user_id } = req.user
      const products = await Product.findAll({ where: { user_id: user_id } })
      res.status(200).json(products)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async add(req, res) {
    try {
      const { user_id } = req.user
      const { name, description, price, category } = req.body
      const product = await Product.create({
        name: name,
        user_id: user_id,
        description: description,
        price: price,
        category: category,
      })
      res.status(201).json(product)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async update(req, res) {
    try {
      const { name, description, price, category } = req.body
      const id = req.params.id

      const updateProduct = await Product.update(
        {
          name: name,
          description: description,
          price: price,
          category: category,
        },
        { where: { id: id } },
      )

      if (updateProduct == 0) {
        return res.status(400).json('Cat not found!')
      }

      const product = await Product.findOne({ where: { id: id } })
      res.status(200).json(product)
    } catch (error) {
      res.status(400).send(error)
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id
      const product = await Product.destroy({ where: { id } })

      if (!product) {
        return res.status(400).json('Product not found!')
      }

      res.status(200).json('Product deleted with sucess!')
    } catch (error) {
      res.status(400).send(error)
    }
  },
}
