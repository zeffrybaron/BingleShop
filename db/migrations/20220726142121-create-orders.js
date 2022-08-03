'use strict';

// penyimpanan data pesanan pelanggan
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orders',{ 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        item_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'items',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        transaction_date: {
          type: Sequelize.DATE,
          allowNull: false
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
    await queryInterface.dropTable('orders');
  }
};