var services = require('../services');

var userService = services.userService;
var flightService = services.flightService;



exports.index = function(request, response) {
    response.json(userService.getCurrentUser());
}

exports.list = function(request, response) {
    response.json(flightService.list());
}

exports.getflight = function(request, response) {
    var number = request.params.number;

    var flight = flightService.getflight(number);
    response.json(flight);
}





