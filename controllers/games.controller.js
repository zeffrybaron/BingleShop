const { sequelize, Games, Categories, Items } = require('../db/models')

const createGame =  async (req, res, next) =>{
    console.log(req.user_id)
    console.log(req.role)

    try {
        const {categories_id, stock, ...createGame} = req.body
        const isCategoryExist = await Categories.findOne({
            where: {
                id: categories_id
            },
            attributes: ['id']
        })    
        
        if (!isCategoryExist){
        throw{
            code: 404,
            message: 'category not found'
            }
        }

        await sequelize.transaction(async trx => {
            const game = await Games.create({categories_id, ...createGame}, {transaction: trx})
            // create items
            await Items.create({
                game_id: game.id,
                available_stock: stock,
                total_stock : stock
            }, {
                transaction: trx
            })
        })

        // jika berhasil create game
        return res.status(201).json({
            message: 'success create game'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createGame
}