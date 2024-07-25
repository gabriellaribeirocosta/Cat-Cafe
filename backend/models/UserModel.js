import { DataTypes } from 'sequelize';
import sequelize from '../database/db-config';

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = UserModel;