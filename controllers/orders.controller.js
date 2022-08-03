const { Op } = require('sequelize') // untuk query in
const {Games, sequelize, Items, Orders, Order_items} = require('../db/models')

const createOrder = async(req, res, next) => {
    try {
        // cek bukunya ada semua ngga?
        const {games} = req.body

        const gameIds = games.map(game => {
            return game.game_id
        })

        const existGames = await Games.findAll({
            where: {
                id: {
                    [Op.in]: gameIds
                }
            },
            include: [
                {
                    model: Items,
                    as: 'item'
                }
            ]
        })

        // kita cek data yg tadi
        if (existGames.length !== games.length) {
            throw {
                code: 400,
                message: 'list game tidak ditemukan'
            }
        }

        // pake sequelize transaction karena byk tabel-tabel.
        await sequelize.transaction(async trx => {
            // create transaction dan 
            const order = await Orders.create({
                user_id: req.user_id,
                order_date: new Date(),
            }, {
                transaction: trx
            })

            await Promise.all(
                existGames.map(async game => {
                    const selectedPayload = games.find(val => val.game_id === game.id)
    
                    // deduct item game
                    await Items.update({
                        available_stock: game.stock.available_stock - selectedPayload.qty,
                    }, {
                        where: {
                            game_id: game.id
                        },
                        transaction: trx 
                    })
    
                    // create transaction item
                    await Order_items.create({
                        game_id: game.id,
                        order_id: order.id,
                        stock: selectedPayload.qty
                    }, {
                        transaction: trx
                    })
                })
            )
        })

        // send response
        return res.status(200).json({
            message: 'success order game'
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createOrder
}