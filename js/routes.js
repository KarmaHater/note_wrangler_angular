angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider.when('/notes', {
    templateUrl: '/templates/pages/notes/index.html',
    controller: 'NotesIndexController'
  })
  .when('/users', {
    templateUrl: '/templates/pages/users/index.html'
  })
  .when('/notes/:id', {
    templateUrl: '/templates/pages/notes/show.html',
    controller: 'NotesShowController'
  })
  .when('/new-note', {
    templateUrl: '/templates/pages/notes/new_note_form.html',
    controller: 'NoteCreateController'
  })
  .when('/', {
    templateUrl: '/templates/pages/notes/index.html',
    controller: 'NotesIndexController'
  })
  .otherwise({ redirectTo: '/' })
});