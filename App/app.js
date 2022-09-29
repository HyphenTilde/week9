const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'mydb'; // Database Name
const colName = 'products'; // Collection Name
const client = new MongoClient(url); // Creates a new MongoClient

// Connect method to client is used
client.connect(function(err){
    console.log("Connected to database server");
    const db = client.db(dbName);
    const collection = db.collection(colName)
});
