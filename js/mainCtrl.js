angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = ['Nick', 'Elaine', 'Jacob', 'Adam', 'Cayli', 'Sam', 'Nathaniel', 'Victoria'];
  $scope.addFriend = function(newFriend) {
    $scope.friends.push(newFriend);
    $scope.newFriend = {};
  }
})