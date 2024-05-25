// cd Poizon-store/server

require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors')

const router = require('./routes/index.js')
const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 4321


app.use('/api', router)

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