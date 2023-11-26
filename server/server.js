const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConnection = require('./database/db.js')
const defaultData = require('./default.js')
const Router = require('./routes/route.js')

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

const PORT = process.env.PORT || 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// mongoDB database connection
dbConnection(username, password);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

// importing meta data into database
defaultData();