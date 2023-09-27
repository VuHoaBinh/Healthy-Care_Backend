'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Historys extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Historys.init({
        // id: DataTypes.INTEGER,
        patientID: DataTypes.STRING,
        doctorID: DataTypes.STRING,
        decrition: DataTypes.TEXT,
        files: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Historys',
    });
    return Historys;
};