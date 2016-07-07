'use strict';

var myWebController = angular.module('myWebController', []);
myWebController.controller('MyAppController', 
  ['$scope', '$http', 'Person', function ($scope, $http, Person) {
    $scope.notfound = false;
    $scope.showresult = false;
    $scope.searchBy = 'name';
    $http.get('data/mydata.json').success(function(data){
      $scope.listData = data;
    });
    $scope.findResult = function () {
      if ($scope.searchKey.trim() != ""){
        $scope.listTS = Person($scope.listData, $scope.searchBy, $scope.searchKey);
        if ($scope.listTS.length !== 0) {
          $scope.showresult = true;
          $scope.notfound = false;
        }
        else {
          $scope.notfound = true;
          $scope.showresult = false;
        }
      }
      else {
        $scope.notfound = true;
        $scope.showresult = false;
      }
    }
    var clickstt = 0;
    $scope.orderChoosen = function (x) {
      if (clickstt) {
        $scope.orderByMe = x;
        clickstt = 0;
      }
      else {
        $scope.orderByMe = '-'+x;
        clickstt = 1;
      }
    };
}]);
myWebController.controller('DetailsController', [
  '$scope', '$routeParams','$http', 'Person', function ($scope, $routeParams, $http, Person) {
    $scope.id = $routeParams.id;
    $http.get('data/mydata.json').success(function(data){
      $scope.listData = data;
      $scope.person = Person($scope.listData, 'sbd', $scope.id)[0];
      if ($scope.person.gender == 'male') $scope.gender = 'images/icons/icon-male.png';
      else $scope.gender = 'images/icons/icon-female.png';
    });
  }
]);