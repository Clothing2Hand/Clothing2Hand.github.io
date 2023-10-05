const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authController = require('./controllers/authController')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session')
const clothesController = require('./controllers/clothesController')


// -----------------------------------
// let storage = multer.diskStorage({
//     destination:'./public/images', //directory (folder) setting
//     filename:(req, file, cb)=>{
//         cb(null, Date.now()+file.originalname) // file name setting
//     }
// })

//Upload Setting


//------------------------------------------

const cookieParser = require('cookie-parser');

const cookieSecret = 'SoftUni';

const app = express()

const connectionString = 'mongodb://localhost:27017/clothes'

start()
async function start() {

    //try catch !!!
    await mongoose.connect(connectionString)
    app.use(express.json())
    app.use(cors(
        {
        origin: 'http://localhost:4200',
        credentials: true
    }
    ))
    app.use(cookieParser(cookieSecret))
    app.use(trimBody())
    app.use(session())
    app.use('/auth', authController)
    app.use('/clothes', clothesController)

    app.listen(3000)
}