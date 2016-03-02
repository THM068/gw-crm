exports.changePoweredByHeader = function(request, response, next) {
    console.log('dddddd');

//    if(request.session.username == undefined) {
//        console.log("I am here 2");
//        response.redirect('/#/login');
//    }

    response.set('X-Powered-By','gw-crm');
    next();
}


exports.handle500Errors = function(error, request, response, next) {
    console.error(error);
    res.status(500).send('An error has occured check logs for detailed information');
}

