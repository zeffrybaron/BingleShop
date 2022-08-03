'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{ 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        role_id: {   // penghubung ke create roles 
          type: Sequelize.INTEGER,
          references: {
            model: 'roles',
            key: 'id'
          },
          onDelete: 'CASCADE',// mengikuti parent yang dihapus
          onUpdate: 'CASCADE'
                    //'RESTRICT', dilarang (misal mengikuti alur penghapusan data)
                    //'NO ACTION', tidak ada aksi apa2
        },
        refresh_token: {
          type: Sequelize.TEXT
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
     await queryInterface.dropTable('users');
  }
};

