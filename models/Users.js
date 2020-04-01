const Sequelize = require("sequelize")
const db= require("../database/db")

module.exports = db.sequelize.define(
    'users',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },       
        username:{
            type: Sequelize.STRING
        },
        family_name: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        },
        created: {
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)