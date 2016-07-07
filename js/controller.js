'use strict';

var myWebController = angular.module('myWebController', []);

myWebController.controller('MyAppController', 
  ['$scope', '$http', 'Person', function ($scope, $http, Person) {
    //Hiden Result when reload
    $scope.notfound = false;
    $scope.showresult = false;
    //Default searchBy value is 'name'
    $scope.searchBy = 'name';
    //Get Data use $http.get
    $http.get('data/mydata.json').success(function(data){
      $scope.listData = data;
    });
    //Action Event press button Search
    $scope.findResult = function () {
      //Not allow null in searchKey
      if ($scope.searchKey.trim() != ""){
        //Get listTS use Person service
        $scope.listTS = Person($scope.listData, $scope.searchBy, $scope.searchKey);
        if ($scope.listTS.length !== 0) {
          //Show result if listTS has values
          $scope.showresult = true;
          $scope.notfound = false;
        }
        else {
          //'Input not found' if listTS hasn't values
          $scope.notfound = true;
          $scope.showresult = false;
        }
      }
      else {
        //'Input not found' if searchKey is null
        $scope.notfound = true;
        $scope.showresult = false;
      }
    }
    //Status to order Result
    var clickstt = 0;
    //Order Result by orderChoosen
    $scope.orderChoosen = function (x) {
      if (clickstt) {
        $scope.orderByMe = x;
        clickstt = 0;
      }
      else {
        //Reverse the order
        $scope.orderByMe = '-'+x;
        clickstt = 1;
      }
    };
}]);

myWebController.controller('DetailsController', [
  '$scope', '$routeParams','$http', 'Person', function ($scope, $routeParams, $http, Person) {
    //Get id from URL
    $scope.id = $routeParams.id;
    //Get data use $http
    $http.get('data/mydata.json').success(function(data){
      $scope.listData = data;
      //Get result. It's only one because "id" is only one
      $scope.person = Person($scope.listData, 'sbd', $scope.id)[0];
      //Choose image for gender in Details Page
      if ($scope.person.gender == 'male') $scope.gender = 'images/icons/icon-male.png';
      else $scope.gender = 'images/icons/icon-female.png';
    });
  }
]);