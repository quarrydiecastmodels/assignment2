module.exports = function(MongoClient, url, id, username, password, userType, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, db){
        const dbo = db.db("assignment2");
        var myquery = {_id: new require('mongodb').ObjectId(id)}
        var newvalues = { $set: {
            username: username, password: password, userType: userType
        } };

        dbo.collection("users").updateOne(myquery, newvalues, function(err, res){
            if (err) throw err;
            console.log("1 item updated");
            callback(res);
        })
    })   
}