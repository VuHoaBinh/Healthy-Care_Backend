'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Doctor_Clinic_Specialty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER // STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            clinicID: {
                type: Sequelize.STRING
            },
            specialtyID: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Doctor_Clinic_Specialty');
    }
};