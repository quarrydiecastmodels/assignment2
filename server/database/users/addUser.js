module.exports = function(MongoClient, url, username, password, userType, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const dbo = client.db('assignment2');
        var user = { username: username, password: password, userType: userType};

        dbo.collection("users").find(user).toArray(function(err, result){
            if ( result.length == 0 ) {
                dbo.collection("users").insertOne(user, function(err, res){
                    if (err) throw err;
                    console.log(user + " added");
                    client.close();
                    callback();
                })
            }
        })
    })   
}
