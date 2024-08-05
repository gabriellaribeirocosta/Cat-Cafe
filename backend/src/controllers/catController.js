import Cat from '../models/CatModel.js'

export const catController = {
  async list(req, res) {
    try {
      const { user_id } = req.user
      const cats = await Cat.findAll({ where: { user_id: user_id } })
      res.status(200).json(cats)
    } catch (error) {
      res.status(400).json({message: 'The cats cannot be listed'})
    }
  },

  async add(req, res) {
    try {
      const { user_id } = req.user
      const { name, description, race, category } = req.body
      const cat = await Cat.create({
        name: name,
        user_id: user_id,
        description: description,
        race: race,
        category: category,
      })
      res.status(201).json(cat)
    } catch (error) {
      res.status(400).json({message: 'The cat cannot be created'})
    }
  },

  async update(req, res) {
    try {
      const { name, description, race, category } = req.body
      const id = req.params.id

      const updateCat = await Cat.update(
        {
          name: name,
          description: description,
          race: race,
          category: category,
        },
        { where: { id: id } },
      )

      if (updateCat == 0) {
        return res.status(400).json({message: 'The cat cannot be found'})
      }

      const cat = await Cat.findOne({ where: { id: id } })
      res.status(200).json(cat)
    } catch (error) {
      res.status(400).json({message: 'The cat cannot be updated'})
    }
  },

  async delete(req, res) {
    try {
      const id = req.params.id
      const cat = await Cat.destroy({ where: { id } })

      if (!cat) {
        return res.status(400).json({message: 'The cat cannot be found'})
      }

      res.status(200).json('Cat deleted with sucess!')
    } catch (error) {
      res.status(400).json({message: 'The cat cannot be deleted'})
    }
  },
}
