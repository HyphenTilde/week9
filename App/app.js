//let groups = require('../blah.js');

let add = require('./add.js');
let remove = require('./remove.js');
let update = require('./update.js');
let read = require('./read.js');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Connection URL
const dbName = 'mydb'; // Database Name
const colName = 'products'; // Collection Name
const client = new MongoClient(url); // Creates a new MongoClient

// Connect method to client is used
client.connect(function(err){
    console.log("Connected to database server");
    const db = client.db(dbName);
    const collection = db.collection(colName);
    const testArray = [{id: 0, name: "Brush", Description: "It looks nice", price: 200, units: 12},{id: 1, name: "Couch", Description: "It is comfy", price: 1000, units: 2}, {id: 2, name: "Coat", Description: "It feels nice", price: 100, units: 5}];
    add(collection, testArray);
    read(collection);
    update(collection, {id: 0, name: "Brush", Description: "It looks nice", price: 200, units: 12}, 2);
    remove(collection, {id: 0, name: "Brush", Description: "It looks nice", price: 200, units: 12});
    
});
