const bodyParser = require('body-parser')
const express = require('express')
const dotenv = require('dotenv')
const {DEFAULT_PORT} = require("./utils");

dotenv.config({path: './config/config.env'})
const app = express();

app.use(bodyParser.json())


//app.use('/song', song);
//app.use('/user', user);
//app.use('/artist', artist);

const PORT = process.env.PORT || DEFAULT_PORT

const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})