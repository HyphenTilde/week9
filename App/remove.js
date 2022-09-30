module.exports = function(collection, queryJSON){
    collection.deleteOne(queryJSON, function(err, result){
        console.log("Removed the documents with");
        console.log(queryJSON);
    });
}