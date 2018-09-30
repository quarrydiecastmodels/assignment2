// create Const variables
const express = require('express')
const app = express();
const http = require('http').Server(app)
const path = require('path')
let bodyParser = require('body-parser')

// Creates a listening port
const port = process.env.PORT || 3000;
http.listen(port, () => {
	console.log('Starts on port: ' + port);
});

// sets something up. I can't remember
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '../dist/assignment2')));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

// retrieves all users in db
app.all('/fetchUsers', (_, res) => {
	require('./database/users/fetchUser.js')(MongoClient, url, function(users) {
		res.send({success: true, users: users});
	});
});

app.all('/addUser', (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    var userType = req.query.userType;
    console.log("username: " + username + " password: " + password + " userType: " + userType)
    require('./database/users/addUser.js')(MongoClient, url, username, password, userType, function(users){
        console.log(users);
        res.send({success: true, users: users});
    });
});

app.all('/login', (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    require('./database/users/login.js')(MongoClient, url, username, password, function(users){
        res.send({success:true, users: users});
    })
});

app.all('/update', (req, res) => {
    var id = req.query.id;
    var username = req.query.username;
    var password = req.query.password;
    var userType = req.query.userType;
    require('./database/users/updateUser.js')(MongoClient, url, id, username, password, userType, function(users) {
        res.send({success:true, users: users});
    });
});

// connects to database

MongoClient.connect(url, {poolsize:10}, function(err, db) {
	if (err) throw err;
	const dbo = db.db("assignment2");
    

	require('./database/create.js')(app, dbo);

});

/*
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
	  io.emit('message', {type: 'message', text:message});
	});
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
*/