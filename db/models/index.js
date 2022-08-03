
const Roles = require('./role')
const Users = require('./users')
const Sequelize = require('./sequelize')
const Categories = require('./categories');
const Games = require('./games');
const Items = require('./items');
const Orders = require('./orders')
const Order_items = require('./order_items');


Roles.hasMany(Users, {
  as: 'users',
  foreignKey: 'role_id',
})

// relasi login
Users.belongsTo(Roles, { 
  as: 'role',
  foreignKey: 'role_id',
})

Categories.hasMany(Games, {
  as: 'games',
  foreignKey: 'category_id'
});

Games.belongsTo(Categories, {
  as: 'category',
  foreignKey: 'category_id'
});

Games.hasOne(Items, {
  as: 'items',
  foreignKey: 'game_id'
});

Items.belongsTo(Games, {
  as: 'game',
  foreignKey: 'game_id'
});

Orders.belongsTo(Users, {
  as: 'users',
  foreignKey: 'user_id',
})

Order_items.belongsTo(Games, {
  as: 'games',
  foreignKey: 'game_id',
})

Order_items.belongsTo(Orders, {
  as: 'orders',
  foreignKey: 'order_id',
})


module.exports = {
  Sequelize,
  Users,
  Roles,
  Orders,
  Order_items,
  Games,
  Categories,
  Items
};
