var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.locals.pretty = true;

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));

// added to go from express 1.3 => 1.4
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));
app.use(express.static(__dirname + '/public'));

if (env === 'development') {
    mongoose.connect('mongodb://wells/multivision');
} else {
    mongoose.connect('mongodb://iklotzko:ira123@ds063150.mongolab.com:63150/multivision');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.on('error', function() {
    console.log('errorrrr', arguments);
});
db.once('open', function callback() {
    console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message', messageSchema)
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res) {
    console.log('getting partial: partials/' + req.params.partialPath);
    res.render('partials/' + req.params.partialPath);
});
app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env['PORT'] || 3030;
app.listen(port);

console.log('Listening on port ' + port + '...');


