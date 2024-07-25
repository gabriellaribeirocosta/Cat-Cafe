import { DataTypes } from 'sequelize';
import sequelize from '../db-config';

const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = UserModel;