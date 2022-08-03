'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('order_items',{ 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
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
        order_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'orders',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        item_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'items',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        stock: {
          type: Sequelize.INTEGER,
        },
        created_at: {
          type: Sequelize.DATE,
          default: new Date()
        },
        updated_at: {
          type: Sequelize.DATE,
          default: new Date()
        },
        deleted_at: {
          type: Sequelize.DATE
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('order_items');
  }
};