var db = require('./db');
var controllers = require('./controllers');
var userController = controllers.userController
var homeController = controllers.home
var fileController = controllers.fileController
var customerController = controllers.customerController

var passport = require('./auth');
var express = require('express');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(express);
//var cookieParser = require("cookieparser");
//var MongoStore = require('connect-mongo')(express);
var middleware = require('./middleware');
//var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');
app.use(express.cookieParser());
var passport = require('./auth');
//app.use(express.session({
//    secret: 'keyboard cat',
//    store: new MongoStore({
//        mongoose_connection: db
//    })
//}));

//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data
//app.use(cookieParser())Â

app.use(express.session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8sgksmgsfafa-afsfsfssfs',
    store: new MongoStore(
        {
            mongoose_connection: db
        }
    )
}));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.text()); // for parsing application/json
app.use(bodyParser.raw()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.initialize());
app.use(passport.session());

var fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.use(middleware.changePoweredByHeader);
app.use(middleware.handle500Errors);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("view options", {layout: false});



app.get('/', function(request,response){
    //fs.readFile('public/index.html');
    //response.json({status: 'OK'});
    res.render('index');
});

app.get('/home', homeController.index)
app.get('/list/json', homeController.list);
app.get('/flight/:number', homeController.getflight);


//All the user url mappings
app.post('/user/save', userController.save);
app.get('/user/list', userController.list);
app.get('/file/read', fileController.read);

//All the customer url mappings
app.post('/customer/save', customerController.save)
app.get('/customer/google', customerController.showGoogle);
app.get('/customer/home', customerController.home);
app.get('/customer/name', customerController.name);


app.post('/login', passport.authenticate('local', {
    failureRedirect: '/#/login',
    successRedirect: '/#/'
}))

console.log('The dir name is ' + __dirname);
console.log('The dir name is ' + __filename);


app.listen(3000, function(){
    console.info('starting application .....');
})