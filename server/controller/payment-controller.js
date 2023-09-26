const paytmchecksum = require('../paytm/PaytmChecksum.js');
const paytmParams = require('../server.js');
const paytmMerchantKey = require('../server.js')

const addPaymentGateway = async (request, response) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        }

        console.log(params);

        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({ error: error.message })
    }
}

module.exports = {
    addPaymentGateway
};