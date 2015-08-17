angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider.when('/notes', {
    templateUrl: '/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  .when('/users', {
    templateUrl: '/templates/users/index.html'
  })
  .when('/notes/:id', {
    templateUrl: '/templates/notes/show.html',
    controller: 'NotesShowController'
  })
  .when('/new-note', {
    templateUrl: '/templates/notes/new_note_form.html',
    controller: 'NoteCreateController'
  })
  .when('/', {
    templateUrl: '/templates/notes/index.html',
    controller: 'NotesIndexController'
  })
  .otherwise({ redirectTo: '/' })
});