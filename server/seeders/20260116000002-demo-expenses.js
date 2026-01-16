'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('expenses', [
      {
        name: 'Makan & Minum',
        total: 500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Transport',
        total: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utilitas & Internet',
        total: 400000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hiburan',
        total: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('expenses', null, {});
  }
};
