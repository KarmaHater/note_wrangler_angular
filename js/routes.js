angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider.when('/notes', {
    templateUrl: '/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  .when('/users', {
    templateUrl: '/templates/users/index.html'
  })
  .when('/', {
    templateUrl: '/templates/notes/index.html'
  })
  .when('/notes/:id', {
    templateUrl: '/templates/notes/show.html',
    controller: 'NotesShowController'
  })
  .otherwise({ redirectTo: '/' })
});