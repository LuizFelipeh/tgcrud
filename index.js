/*config = {
	"database":
	{
	    "development": "mongodb://atlasadmin:atlasadmin@ds033076.mlab.com:33076/atlassocial_dev",
	    "production": "mongodb://atlasadmin:atlasadmin@ds033076.mlab.com:33076/atlassocial_dev"
	},
	"base_url":
	{
	    "development": "http://localhost:8080",
	    "production": "http://atlassocial.herokuapp.com"
	}
};

process.env.DATABASE_URL = config.database[node_env];
console.log("Database: ", process.env.DATABASE_URL)
process.env.BASE_URL = config.base_url[node_env];
console.log("Base URL: ", process.env.BASE_URL);*/
/*-----------------------------------------------------------------------------*/


//NPM packages
var Express = require('express');
var bodyParser = require ('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//Setting up the app
var app = new Express();
var router = Express.Router();

/*//Database settings
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Database connected");
});
*/
//Setup Port
var port = process.env.PORT || 8080;
app.set('port', port);

//Setting config.
app.set('views',  __dirname + '/views');
app.use(Express.static(__dirname + '/views'));
app.use(Express.static(__dirname + '/public'));

//Logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//Views engine
app.set('view engine', 'ejs');

//Home
app.get('/teste', function(req, res) {
	res.send('Oi, valle');
});

/*//Configuring routes
app.use('/api', routes);
*/
// START THE app
app.listen(app.get('port'), function(){
    console.log("Server listening to port " + app.get('port'));
});

module.exports = app;
