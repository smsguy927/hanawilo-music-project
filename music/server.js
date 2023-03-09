//Sean Shaughnessy
const bodyParser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express()

app.use(bodyParser.json())

const PORT = process.env.PORT || DEFAULT_PORT

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})