import DataTypes from 'sequelize'
import sequelize from '../database/db-config.js'
import UserModel from './UserModel.js'

const CatModel = sequelize.define('Cat', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    references: {
      model: UserModel,
      key: 'id',
    },
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default CatModel
