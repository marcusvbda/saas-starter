require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()

const application = {
    configCors() {
        const cors = require('cors')
        app.use(cors({
            origin: (origin, callback) => {
                return callback(null, true)
                // return callback(new Error('Not allowed by CORS'))
            },
            credentials: true
        }))
    },
    mongoConfig() {
        mongoose.connect(process.env.DB_SERVER, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    },
    registryRoutes() {
        fs.readdirSync("./routes").map(route => {
            const fileName = (route.split("."))[0]
            const snakeCase = fileName.replace(/([A-Z])/g, "-$1").toLowerCase()
            app.use(`/${snakeCase}`, require(`./routes/${fileName}`))
        })
    },
    start() {
        app.use(bodyParser.json())
        app.use(cookieParser())
        this.mongoConfig()
        this.configCors()
        this.registryRoutes()
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`${process.env.APP_NAME} running on port ${process.env.SERVER_PORT}`)
        })
    }
}

application.start()