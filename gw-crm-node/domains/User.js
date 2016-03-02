var moongoose = require('mongoose');

var userSchema = moongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String }
})



module.exports = moongoose.model('User', userSchema);
