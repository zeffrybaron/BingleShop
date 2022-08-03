const { createGame } = require('../controllers/games.controller')
const { authorization } = require('../middlewares/authorization.middleware')
const validation = require('../middlewares/validation.middleware')
const createGameSchema = require('../validations/create-game.schema')

const router = require('express').Router()

router.post('',authorization('Admin'), validation(createGameSchema), createGame)



module.exports = router