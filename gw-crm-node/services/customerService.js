var domains = require('../domains');
var Customer = domains.Customer

exports.save = function(model, response) {
    var record = new Customer(model)
    record.save(function(err){
        if(err) {
            response.status(500).json({status: err})
        }
        else {
            console.info('Record saved successfully');
            response.json({stutus: 'Success'})
        }
    });
}