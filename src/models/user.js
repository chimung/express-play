import { DataTypes } from "sequelize";

export default function(sequelize) {
    sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.String
        }
    })
}