'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bookings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Bookings.init({
        // id: DataTypes.INTEGER,
        statusID: DataTypes.STRING,
        doctorID: DataTypes.INTEGER,
        patinentID: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Bookings',
    });
    return Bookings;
};