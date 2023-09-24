'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER // STRING
            },
            name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            decription: {
                type: Sequelize.TEXT
            },
            images: {
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
        await queryInterface.dropTable('Clinics');
    }
};