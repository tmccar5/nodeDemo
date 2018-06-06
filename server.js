var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var PORT = process.env.PORT || 3001;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/home', function(req, res) {
	console.log('we hit the route !!');
	res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get('/about', function(req, res) {
	console.log('we hit the route !!');
	res.sendFile(path.join(__dirname, "./public/about.html"));
});

app.listen(3001, function() {
	console.log("Listening on port: " + 3001);
});




























































// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


















// app.post('/saveDataSpot', function(req, res) {
// 	console.log('this is the thing we wanna save from the form!!!', req.body);


// 	var queryStatement = "INSERT INTO Dudes (name, favColor) VALUES (" + req.body.name + ", " + req.body.favColor +")"
// 	console.log('thi sis our query!!!', queryStatement);
// 	// SAVE IT TO THE DB!!!!
// 	// connection.query("INSERT INTO Dudes (name, favColor) VALUES (" + req.body.name + ", " + req.body.favColor +")", function (error, results, fields) {
// 	// 	if (error) throw error;
// 	// 	console.log('confirmatino from DB ', results);
// 	//   });
	
// 	//SEND BACK A CONFIRMATION
// 	res.send([{}]);
// });




















// app.get('/grabHomies', function(req, res) {
// 	var Post = require('./models/Post.js');
// 	Post.find({}).then(function(dbPost) {
// 		console.log('all the things we just found!!', dbPost)
// 		res.json(dbPost)
// 	});
// });



// var mongoose = require("mongoose");

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tomNewDB";

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {}, function(err, db){
// 	console.log('we connected!!', err);
// });



// app.post('/savePost', function(req, res) {
// 	var Post = require('./models/Post.js');
// 	Post.create({

// 	}).then(function(dbPost) {
// 		console.log('all the things we just found!!', dbPost)
// 		res.json(dbPost)
// 	});
// });


// db.create({
// 	title: 'toms first post test',
// 	postText: 'testing test test'
// }).then(function(dbPost) {
//   console.log('we just made this post!!!!', dbPost)
// });






// app.get('/home', function(req, res) {
// 	console.log('we hit the route !!');
// 	res.sendFile(path.join(__dirname, "./public/home.html"));
// });

// app.get('/about', function(req, res) {
// 	console.log('we hit the route !!');
// 	res.sendFile(path.join(__dirname, "./public/about.html"));
// });


// db.sequelize.sync().then(function() {
// 	app.listen(3000, function() {
// 	console.log("Listening on port: " + 3000);
// 	});
// })




// app.post('/saveDataSpot', function(req, res) {
// 	console.log('we hit the route!!!', req.body);
// 	db.Homies.create({
// 		name: req.body.name,
// 		favColor: req.body.favColor
// 	  }).then(function(confirmation) {
// 		console.log('confirmation from the DB', confirmation)
// 		res.json(confirmation);
// 	  })
// })








// app.post('/saveDataSpot', function(request, res) {
// 	console.log('we hit the save route !!', request.body);
// 	myDataArray.push(request.body);
// 	res.send('hey dud i saved it');
// });

// app.get('/grabData', function(req, res) {
// 	console.log('we hit the route grabData', myDataArray);
// 	res.json(myDataArray);
// });


