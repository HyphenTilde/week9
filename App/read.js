module.exports = function(collection){
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
    });
}