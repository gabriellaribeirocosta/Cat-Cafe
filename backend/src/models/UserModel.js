import DataTypes from 'sequelize'
import sequelize from '../database/db-config.js'

const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default UserModel
