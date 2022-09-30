const express = require('express'); //import express.js
const app = express(); //the app object denotes the express application.
const http = require('http').Server(app);
const bodyParser = require('body-parse');
const cors = require('cors'); //allow cross site origin requests
const MongoClient = require('mongodb').MongoClient; //require MongoClint functionality
var ObjectID = require('mongodb').ObjectId; //require ObjectID functionality

app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    //Callback, when connection established run rest
    if(err){return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);

        require('./routes/api-add.js')(db, app);
        require('./routes/api-read.js')(db, app);
        require('./routes/api-remove.js')(db, app, ObjectID);
        require('./routes/api-update.js')(db, app, ObjectID);

    console.log("Listening");
});