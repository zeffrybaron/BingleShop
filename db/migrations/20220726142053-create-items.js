'use strict';

// tempat penyimpanan barang/item yang tersedia
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("items", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "games",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      available_stock: {
        type: Sequelize.INTEGER,
      },
      total_stock: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("items")
  },
}