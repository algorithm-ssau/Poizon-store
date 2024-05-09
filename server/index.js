require('dotenv').config();

const express = require('express')

const PORT= 4321

const sequelize = require('./db')

const app = express()

const start = async () =>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    }
    catch(e){
        console.error(e)
    }
}

start().then(r => {})