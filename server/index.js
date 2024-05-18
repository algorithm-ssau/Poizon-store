// cd Poizon-store/server
// npm run dev
const gt = 0
require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')

const app = express()

const PORT = process.env.PORT || 4321

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e){
        console.log(e)
    }
}

start()