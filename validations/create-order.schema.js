const Joi = require("joi");

const createOrderSchema = Joi.object({
    games: Joi.array().items(Joi.object({
        game_id: Joi.number().required(),
        qty: Joi.number().required()
    }))
})

module.exports = createOrderSchema