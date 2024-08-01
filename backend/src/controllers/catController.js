import Cat from '../models/CatModel.js'

export const catController = {
  async list(req, res) {
    try {
      const cats = await Cat.findAll()
      res.status(200).json(cats)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async add(req, res) {
    try {
      const cat = await Cat.create(req.body)
      res.status(200).json(cat)
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async update(req, res) {
    try {
      const { name, description, race } = req.body
      const id = req.params.id
      const cat = await Cat.findOne({ where: { id } })

      if (!cat) {
        return res.status(400).json('Cat not found!')
      }

      cat.name = name
      cat.description = description
      cat.race = race

      await cat.save()
      res.status(201).json('Cat updated with sucess!')
    } catch (error) {
      res.status(400).send(error)
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id
      const cat = await Cat.destroy({ where: { id } })

      if (!cat) {
        return res.status(400).json('Cat not found!')
      }

      res.status(200).json('Cat deleted with sucess!')
    } catch (error) {
      res.status(400).send(error)
    }
  },
}
