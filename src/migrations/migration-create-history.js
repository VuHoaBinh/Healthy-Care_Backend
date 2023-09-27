'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Historys', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER // STRING
            },

            patientID: {
                type: Sequelize.STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            decrition: {
                type: Sequelize.TEXT
            },
            file: {
                type: Sequelize.TEXT
            },



            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Historys');
    }
};