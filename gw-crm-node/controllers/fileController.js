var services = require('../services');

var fileService = services.fileService


exports.read = function(request, response) {
    fileService.readFile();
    response.json({status: 'OK'});
}
