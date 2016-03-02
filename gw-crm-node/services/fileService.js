var fs = require('fs');


exports.readFile = function() {
    fs.readFile('./names.txt', function (er, buf) {
        console.log(buf.toString());
    });
}