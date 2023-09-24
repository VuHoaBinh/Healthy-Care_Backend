"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        passWord: "binhtom",
        firstName: "Binh",
        lastName: "Vu Hoa",
        address: "VN",
        phone: "123-123-1234",
        gender: "Male",
        Image: null,
        roleID: "R1",
        position: "bac si",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
