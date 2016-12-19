angular.module('myFirstRouter')
.controller('aboutCtrl', function($scope){
  $scope.author = 'Cole';
  $scope.tech = [
    'Angular',
    'html',
    'css',
    'Angular UI Router'
  ];
})
