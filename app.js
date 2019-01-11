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

//Services:

app.service('cityService', function() {

    this.city = 'Ex. London';

});


//Controllers:

app.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

}]);

app.controller('forecastController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

}]);


