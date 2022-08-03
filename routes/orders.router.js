const { createOrder } = require('../controllers/orders.controller')
const { authorization } = require('../middlewares/authorization.middleware')
const createOrderSchema = require('../validations/create-order.schema')

const validation = require('../middlewares/validation.middleware')

const router = require('express').Router()

// yang bisa transaksi member, wakaupun admin bisa juga
router.post('',authorization('Member'), validation(createOrderSchema), createOrder)
// 
module.exports = router