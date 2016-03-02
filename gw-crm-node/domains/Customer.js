var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: { type: String },
    surname: { type: String},
    age: {type: String },
    maritalStatus: {type: String, default: 'Single'},
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Customer', customerSchema);

