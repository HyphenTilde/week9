module.exports = function(db, app){
    //Get a list of all items from database

    app.get('/api/getlist', function(req, res){
        const collection = db.collection('products');
        collection.find({}).toArray((err, data)=>{
            res.send(data);
        })
    })
}