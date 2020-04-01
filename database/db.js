'use strict';
const Sequelize = require("sequelize") 
const db= {}
const sequelize = new Sequelize("db_client", "victor", "12345", {
    host: 'localhost',
    dialect: 'postgres',    
    port: 5432,
    operatorsAliases: true /*,
    pool: {
        max:1,
        min:0,
        acquire: 3000,
        idle: 1000
        } */
    }    
)

sequelize.authenticate()
  .then(() => {
    console.log('Соединение с базой данных установлено');
  })
  .catch(err => {
    console.error('ошибка подключения к базе данных: ', err);
  })
  .finally(() => {    
    // sequelize.close();
  });

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 