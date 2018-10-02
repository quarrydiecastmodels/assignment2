module.exports = function(MongoClient, url, id, callback){
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, client){
        const db = client.db('assignment2');
        var myquery = {_id: new require('mongodb').ObjectId(id)}
        db.collection("users").deleteOne(myquery, function(err, res){
            if (err) throw err;
            callback();
        })
    })   
}