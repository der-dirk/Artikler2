(function() {
  var app = angular.module('artikler', []);

  app.controller('ExpressionController', function($scope, $http){
    
    $http.get('expressions.json').success(function(data) {
      $scope.expressions = data;
    });
      
    //$scope.products=gems;
  });
  
})();

