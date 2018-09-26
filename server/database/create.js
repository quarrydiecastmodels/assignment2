module.exports = function ( app, dbo ) {

	// Creates a user table
	dbo.createCollection("users", function(err, res) {
	    if (err) throw err;
	    console.log("Users Table is created!");
	});
}
