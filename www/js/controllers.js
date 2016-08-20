angular.module('starter.controllers', [])


// first controller
.controller('firstCtrl', function ($scope, Food) {
    
          function copy(m, n){
          Food.addFood(m, n);
          }
        
        $scope.data = Food.data;
    
    //sets up the delete function
    
        $scope.deleteTask = function (del) {
            Food.deleteTask(del);
        }

        //$scope.tasks = Food.data.tasks;
        $scope.tasks = Food.data.tasks;
    
        $scope.copy = copy;
})

//second controller has default calories and name
.controller('secondCtrl', function($scope, Food){
    var data = {
        name: "",
        calories: 0
  }
// food add function
    function add(m, n){
        Food.addFood(m, n);
    }
    
    
  //Scopes  
  $scope.data = data;
  $scope.add = add;
    
});


