module.exports = function(db, app){
    app.post('/api/add', function(req, res){
        if(!req.body){
            return res.sendStatus(400);
        }
        product = req.body;
        const collection = db.collection('products');

        //check for duplicate ids
        collection.find({'id':product.id}).count((err, count)=>{
            if(count==0){
                //if theres no duplicate
                collection.insertOne(product, (err, dbres)=>{
                    if(err) throw err;
                    let num = dbres.insertedCount;
                    // send back no error message
                })
            }else{
                //On error happening
                res.send({num:0, err:"duplicate item"});
            }
        });
    });
}