import {Sequelize, DataTypes} from "sequelize";
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '123',
    database: 'postgres'
})

export { sequelize }