var express = require("express");
var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();
app.use( bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// route to handle user registration
router.post('/register', login.register);
router.post('/login', login.login)
app.use('/api', router);
app.listen(5001);




