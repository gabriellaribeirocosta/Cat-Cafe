import { DataTypes } from 'sequelize';
import sequelize from '../database/db-config';

const CatModel = sequelize.define('Cat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    race: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = CatModel;