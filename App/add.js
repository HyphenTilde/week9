module.exports = function(collection, docArray){
    collection.insertMany(docArray, function(err, result){
        console.log("Inserted the following documents:");
        console.log(docArray);
    });
}