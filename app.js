(function(){
  'use strict'
  angular.module('myApp',[])
  .controller('myCtrl',['$scope',function($scope){
    $scope.name = '';
    $scope.count ="";
    var message = '';
      $scope.mySplit = function(){
        var comma = ',';
        var fun = checkIfTooMuch($scope.name,comma);
        $scope.count = fun;
      }
    function checkIfTooMuch(stringToSplit,seperator)
{
  var arr = stringToSplit.split(seperator);
    var len = arr.length;
      if (arr == '') {
        message = "please enter the string";
      }

      else if(len >= 1 && len < 4)
      {
        message = "Enjoy!";
      }
      else if(len > 3)
       {
        message = "Too Much";
       }
       return message;
};
}]);
})();
