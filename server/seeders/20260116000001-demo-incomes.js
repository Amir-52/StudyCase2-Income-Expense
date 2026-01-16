'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('incomes', [
      {
        name: 'Gaji Bulanan',
        total: 5000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bonus Project',
        total: 2000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Freelance Work',
        total: 1500000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('incomes', null, {});
  }
};
