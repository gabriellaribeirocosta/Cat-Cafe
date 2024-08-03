import DataTypes from 'sequelize'
import sequelize from '../database/db-config.js'

const UserModel = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default UserModel
