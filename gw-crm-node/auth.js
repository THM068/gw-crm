"use strict";
var services = require('./services');
var utility = require('./utility');

var userService = services.userService;
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({},
    function(username, password, done) {
        console.log("I am authenticating ....." + username);
        var user = userService.getUserByUsername(username);
        console.log("I am authenticating ..... " + user.username);
        if (user.username === username && utility.comparePassword(password, user.password)) {
            console.info("User: " + user.username);
            return done(null, {username: user.username});
        }

        return done(null, false);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(username, done) {
    done(null, {username: username});
});



module.exports = passport;