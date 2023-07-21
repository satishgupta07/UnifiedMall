const products = require("./constants/data");
const product = require("./models/product");

const defaultData = async() => {
    try {
        await product.insertMany(products);

        console.log('Data imported successfully.')
    } catch (error) {
        console.log('Error while inserting default data : ', error);
    }
}

module.exports = defaultData;