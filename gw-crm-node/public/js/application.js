var app = angular.module('crm', ['ngResource', 'ngRoute']);

app.run(['$rootScope', function($rootScope){
    console.info('Bootstrap code ...')
}])

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
            //controller: 'homeController',
            templateUrl: 'views/home.html'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
}])