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

    this.city = 'London, UK';

});


//Controllers:

app.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

}]);

app.controller('forecastController', ['$scope', '$http', 'cityService', function($scope, $http, cityService) {

    $scope.city = cityService.city;

    $scope.formattedDate = function(datetime) {
        return new Date(datetime);
    };

    $scope.toCelsius = function(temp) {
        return Math.round(+temp - 272.15) + ' C';
    };

    // $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast', { q: $scope.city, APPID: '2027ae8eea532c45dab4a1954c46169c' });

    // $scope.weatherResult = $scope.weatherAPI.get();

    // $scope.weatherResult.then(function(response) {
    //     $scope.weatherData = response.data.list;
    // })

    $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.city + '&APPID=2027ae8eea532c45dab4a1954c46169c')
        .then(function successHandler(response) {

            $scope.weatherData = response.data.list;

        }, function errorHandler(response) {
            alert('Unable to fetch data');
        });



}]);

//Directives:

app.directive('forecastItem', function() {
    return {
        templateUrl: 'directives/forecast-item.html',
        replace: true,
        scope: {
            dailyForecastObject: '=',
            formattedDate: '&',
            toCelsius: '&'
        }
    }
});


