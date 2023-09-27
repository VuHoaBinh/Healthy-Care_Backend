'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedules extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Schedules.init({
        // id: DataTypes.INTEGER,
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorID: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Schedules',
    });
    return Schedules;
};