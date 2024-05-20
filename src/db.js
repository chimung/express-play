import {Sequelize} from "sequelize";
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '123',
    database: 'postgres'
})

const models = ["./user.js"];
// models.forEach(model => import(model).then(fn => fn(sequelize)))

export { sequelize }