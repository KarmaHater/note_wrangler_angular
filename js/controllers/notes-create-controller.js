angular.module('NoteWrangler')
.controller('NoteCreateController', ['$scope', '$http', function ($scope, $http) {
  $scope.saveNote = function(note) {
    // http call for post if you had a backend there is a catch callback if there are errors
  }
}])