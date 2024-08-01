import Product from '../models/ProductModel.js'

export const productController = {
  async list(req, res) {
    try {
      const products = await Product.findAll()
      res.status(200).json(products)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async add(req, res) {
    try {
      const products = await Product.create(req.body)
      res.status(201).json(products)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async update(req, res) {
    try {
      const { name, description, price } = req.body
      const id = req.params.id
      const product = await Product.findOne({ where: { id } })

      if (!product) {
        return res.status(400).json('Product not found!')
      }

      product.name = name
      product.description = description
      product.price = price

      await product.save()
      res.status(201).json('Product updated with sucess!')
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
