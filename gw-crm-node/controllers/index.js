"use strict";
var home = require('./homeController')
var userController = require('./userController');
var fileController = require('./fileController');
var customerController = require('./customerController');

exports.home = home;
exports.userController = userController;
exports.fileController = fileController;
exports.customerController = customerController;
