const express = require('express')
const userRouter = require('./routes/users.router')
const gameRouter = require('./routes/games.router')
const orderRouter = require('./routes/orders.router')

const app = express()

//untuk request kita harus init express json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', userRouter)
app.use('/games', gameRouter)
app.use('/orders', orderRouter)

// error middleware
app.use((err, req, res, next) => {
    return res.status(err.code || 500).json({
        message: err.message || 'Internal server error'
    })
})

module.exports = app