var services = require('../services');

var userService = services.userService;


exports.save = function(request, response, next) {
    //console.log(request.body);
    var username = request.body.username
    var passwd = request.body.password

    var model = {
        username: username,
        password: passwd
    };
    userService.save(model, response);
}


exports.list = function(request, response) {
    userService.getUserByUsername('thm068',response);
}
