var services = require('../services');
var customerService = services.customerService;
var httpRequest = require('request');
var authorization = require('../authorization');


exports.save = function(request, response) {

    var model = {
        name:request.body.name,
        surname:request.body.surname,
        age: request.body.age,
        maritalStatus: request.body.maritalStatus,
        dateCreated: new Date()
    };
   customerService.save(model, response);
}


exports.showGoogle = function(request, response) {
    httpRequest('http://www.google.com', function (error, resp, body) {
       response.send(body);
    });
}

exports.home = function(request, response) {
    httpRequest.get('http://localhost:8080/api/home',authorization,
        function(error, resp, body){
          response.send(body);
//        response.send(JSON.parse(body).success);
    });

}

exports.name = function(request, response) {
    //response.send('Hello world');
    httpRequest.post('http://localhost:8080/api/name', authorization,
    function(error, resp,body){
        response.send(body)
    })
}