//Module:
var app = angular.module('weatherApp', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:city', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });

});

app.controller('homeController', ['$scope', function($scope) {

    console.log('Home Controller');

}]);

app.controller('forecastController', ['$scope', function($scope) {

    console.log('Forecast Controller');

}]);

