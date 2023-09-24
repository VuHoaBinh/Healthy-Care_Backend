'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        // id: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        roleID: DataTypes.STRING,
        position: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};