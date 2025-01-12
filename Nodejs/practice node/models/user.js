const { DataTypes } = require("sequelize"); // 引入 DataTypes

const UserModel = (sequelize) => {
    // 定義模型
    return sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    });
};

module.exports = UserModel;
