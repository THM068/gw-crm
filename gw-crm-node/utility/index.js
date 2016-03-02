var bycrypt = require('bcrypt');

exports.encodePassoword = function(plainPassword) {
    var salt = bycrypt.genSaltSync(10);
    var hash = bycrypt.hashSync(plainPassword, salt);

    return hash
}

exports.comparePassword = function(plainPassword, hashedPassword) {
    return bycrypt.compareSync(plainPassword, hashedPassword);
}
