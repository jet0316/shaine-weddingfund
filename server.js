//============================================//
//================SERVER PAGE=================//
//============================================//


//======== Require dependencies from package.json ========//
var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var app        = express();
var fs         = require('fs');
// var mp3skull   = require('mp3skull');

//======== Connect and name your database in mongodb =========//
mongoose.connect('mongodb://localhost/mean-test');

//========= Express config, look at documentation =========//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

//======== Single page being rendered for 
app.get('/', function(req, res){
	res.sendFile('html/index.html', { root : './client' })
});

//======== requiring api contrtoller ========//
var apiController = require('./controllers/api.js')

//======= api routes =========//
app.post('/api/product', apiController.post)
app.get('/api/product', apiController.get)
app.get('/api/product/:id', apiController.get)
app.delete('/api/product/:id', apiController.delete)

// app.get('/music', function(req, res){
// 	mp3skull('the beatles hello goodbye', function (err, tracks) {
// 		tracks[0].song.pipe(fs.createWriteStream('hello goodbye.mp3'));
// 		res.send(tracks)
// 		});
// 	})


//======= Set up server =======//
port = 3001
app.listen(port, function(){
	console.log(port + " million dollars")
})

// on your terminal under your root of the project, run $ node server.js
// or npm install -g nodemon. Then run $ nodemon server.js, and that restarts the server whenever anything is changed
// all the console logs on this page, and the controllers it requires, are on the terminal




