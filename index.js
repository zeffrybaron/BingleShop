require('dotenv').config()

const app = require("./app");

const PORT = process.env.PORT || 6969

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})