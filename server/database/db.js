const mongoose = require('mongoose');

function dbConnection(username, password) {

    const mongoURI = `mongodb+srv://${username}:${password}@cluster0.xuf6axi.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology:true});
    const connection = mongoose.connection;
    connection.once('open', function(){
        console.log('DB conection has been made!');
    }).on('error', function(error){
        console.log('Error while connecting with the database : ', error);
    });
}

module.exports = dbConnection;