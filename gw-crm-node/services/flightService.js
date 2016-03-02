var flights = require('../data');
var Flight = require('../flight');

exports.list = function() {
    var flightData = [];

    for(var number in flights) {
        //console.info(flights[number]);
        flightData.push(Flight(flights[number]).getInformation())
    }

    return flightData;
}

exports.getflight = function(number) {
    var flight = Flight(flights[number]).getInformation();

    return flight;
}