'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialties extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Specialties.init({
        // id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        decrition: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Specialties',
    });
    return Specialties;
};