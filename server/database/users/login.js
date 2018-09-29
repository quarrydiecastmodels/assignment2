module.exports = function(MongoClient, url, username, password, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, db){
        const dbo = db.db("assignment2");
        var query = {username: username, password: password };
        console.log(query);
        dbo.collection("users").find(query).toArray(function(err, result){
            console.log(result);
        }) 
        
    })   
}