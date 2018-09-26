module.exports = function(MongoClient, url, username, password, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const dbo = client.db('assignment2');
        var user = { username: username, password: password};
        dbo.collection("users").insertOne(user, function(err, res){
            if (err) throw err;
            console.log("User added");
            client.close();
            callback();
        })
    })   
}
