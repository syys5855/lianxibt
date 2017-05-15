module.exports = (app) => {
    require('./testCtrl.js')(app);
    app.controller('merchantTopCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.clickExit = function() {
            $http({
                method: "get",
                url: '/api/merchant/loginOut.json'
            }).then(res => {
                let { data } = res;
                if (data.success) {
                    $state.go('login');
                }
            });
        }
    }])
}