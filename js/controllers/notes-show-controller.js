angular.module('NoteWrangler')
.controller('NotesShowController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  // could do this if you had a real back end
  // url: 'notes/' + $routeParams.id 
  $http.get('notes.json').success(function(data){
    for (var i = data.length - 1; i >= 0; i--) {
      if (data[i].id === $routeParams.id) {
        $scope.note = data[i];
      };
    };
  }.bind(this))
}])

