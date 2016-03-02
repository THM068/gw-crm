var domains = require('../domains');
var utility = require('../utility');
var UserSchema = domains.User;

exports.getCurrentUser = function() {


    return {
        name: 'Thando',
        surname: 'Mafela'
    }
}

exports.save = function(model, response) {
    model.password = utility.encodePassoword(model.password)
    var record = new UserSchema(model);
    record.save(function(err) {
        if(err) {
            response.status(500).json({status: err})
        }
        else {
            console.info('Record saved successfully');
            response.json({stutus: 'Success'})
        }
    });
};

exports.list = function(response) {
    UserSchema.find().exec(function(err, userList){
        if(err){
            console.error(err);
            response.status(500).json({status: 'Fail'});
        }
        else {
            response.json(userList)
        }
    });
}


exports.getUserByUsername = function(username, response) {
    var query = UserSchema.findOne({username: username});
    query.select('username password');
    query.exec(function (err, user) {
        if (err) return handleError(err);
        response.json(user);
    })
}

