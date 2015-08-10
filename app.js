(function() {
  var app = angular.module('artikler', []);

  app.controller('ExpressionController', function($scope, $http){
    
    $http.get('https://raw.githubusercontent.com/der-dirk/Artikler2/master/expressions.json').success(function(data) {
      $scope.expressions = data;
      
      for (var key1 in $scope.expressions)
      {
        if ($scope.expressions.hasOwnProperty(key1))
        {
          for (var key2 in $scope.expressions[key1].matches)
          {
            if ($scope.expressions[key1].matches.hasOwnProperty(key2))
            {
              $scope.expressions[key1].candidates.push($scope.expressions[key1].matches[key2]);
            }
          }
        }
      }

      $scope.clickMe = function(buttonData)
      {
        if (buttonData[0].indexOf(buttonData[1]) == -1)
          $scope.ok = false;
        else
          $scope.ok = true;
      };

    });
  });

})();

