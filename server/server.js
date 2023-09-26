const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const { v4: uuid } = require('uuid');
const dbConnection = require('./database/db.js')
const defaultData = require('./default.js')
const Router = require('./routes/route.js')

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

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

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567890'

module.exports = {
    paytmMerchantKey,
    paytmParams
};