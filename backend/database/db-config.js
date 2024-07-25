import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db-view.sqlite'
});

export default sequelize;