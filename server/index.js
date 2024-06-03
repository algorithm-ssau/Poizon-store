// cd Poizon-store/server
// npm run dev

require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/index.js')
const portfinder = require('portfinder');


//const PORT = process.env.PORT || 4321


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        const port = portfinder.getPort((err, port) => {
            if (err) {
                console.error('Ошибка при поиске свободного порта:', err)
                return
            }
            app.listen(port, () => console.log(`Server started on port ${port}`))
        });
        
    }
    catch (e){
        console.log(e)
    }
}

start()