import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/db-config.js'

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server running on http://localhost:${PORT}`)
});