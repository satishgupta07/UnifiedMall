const express = require('express')
const app = express()
require('dotenv').config()
const dbConnection = require('./database/db.js')
const defaultData = require('./default.js')

const PORT = 5000
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// mongoDB database connection
dbConnection(username, password);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

// importing meta data into database
defaultData();