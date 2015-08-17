angular.module('NoteWrangler')
.config(function($routeProvider){
  $routeProvider.when('/notes', {
    templateUrl: '/templates/notes/index.html'
  })
  .when('/users', {
    templateUrl: '/templates/users/index.html',
    controller: 'UsersCtrl'
  })
});