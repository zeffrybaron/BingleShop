const Joi = require("joi");

// konsepnya bikin schema agar apa yg direquire wajib diisi.
const createGameSchema = Joi.object({
    category_id : Joi.number().required(),
    stock : Joi.number().required(),
    name : Joi.string().required(),
})
// <.only()> jika kita mau lock yg di require diatas.
module.exports = createGameSchema