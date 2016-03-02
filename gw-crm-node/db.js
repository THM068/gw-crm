var mongoose = require('mongoose');

//mongoose.connect('mongodb://thm068:Lionel1984@localhost:27017/crm');
mongoose.connect('mongodb://localhost/crm');


module.exports = mongoose.connection.on('error', function (err) {
    console.error(err)
});;
