angular.module('NoteWrangler')
.controller('NotesIndexController', function($scope, $http){
    $http.get('notes.json').success(function(data){
      $scope.notes = data
  });
});