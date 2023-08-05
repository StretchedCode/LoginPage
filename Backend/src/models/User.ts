import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}