module.exports = function (MongoClient, url, callback ) {

	MongoClient.connect(url, {poolsize:10}, function(err, db) {
		const dbo = db.db("assignment2");
		dbo.collection("users").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log("Finds all Items:");
		    console.log(result);
		    callback(result);

		    //console.log("Result of item number 2 in array: " + result[2].name);
		});
	});
}