var services = require('../services');
var customerService = services.customerService;


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