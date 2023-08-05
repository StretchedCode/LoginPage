import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blogapp", "ghufranshahid", {
    host: 'localhost',
    dialect: 'postgres'
})

const User = require("./user")(sequelize)

export{
    sequelize,
    User
}