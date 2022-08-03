'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'STRATEGY',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'SURVIVAL_FPS',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
