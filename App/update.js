module.exports = function(collection, queryJSON, updateJSON){
    collection.updateOne(queryJSON, { $id: updateJSON }, function(err, result){
        console.log("for the documents with");
        console.log(queryJSON);
        console.log("id: ");
        console.log(updateJSON);
    });
}