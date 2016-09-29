var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var cassandracqlstore=require('connect-cassandra-cql')(session);
var cassandra=require('cassandra-driver');
var flash=require('connect-flash');
var routes = require('./routes/index');
var app = express();

var client =new cassandra.Client({contactPoints:['localhost'],keyspace:'iotserver'});
var config={client:client};

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(flash());
//app.engine("html",require('ejs').__express);
app.set('view engine', 'ejs');
//app.set('view engine', 'html');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret:'keyboard-cat',
	store:new cassandracqlstore(config),
	resave:true,
	saveUnintialized:true}));

routes(app);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
