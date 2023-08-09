
import { Sequelize } from "sequelize-typescript"
import EnvVars from "@src/constants/EnvVars"

console.log("hello")
const sequelize = new Sequelize({
    database: 'blogapp',
    username: 'ghufranshahid',
    host: '10.0.0.70',
    password: '',
    dialect: 'postgres',
    models:[__dirname + "/User"]
})

export default sequelize