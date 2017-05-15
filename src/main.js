var angular = require('angular');
var app = angular.module('FMapp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);
require('angular-ui-router');
require('angular-animate');
require('angular-ui-bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./scripts/controllers')(app);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/test');
    $stateProvider.state('test', {
        url: '/test',
        controller: 'testCtrl',
        template: require('./html/test.html')
    });
}]);

// 配置http的服务
app.config(function($httpProvider) {
    $httpProvider.defaults.transformRequest = function(obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});