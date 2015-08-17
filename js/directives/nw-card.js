angular.module("NoteWrangler")
.directive('nwCard', [function () {
  var num = 1;
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '='
    },
    link: function(scope, element, attrs) {
      console.log(attrs.header)
      $("div.card").on('click', function(e) {
          e.preventDefault();
         $(e.target).next().toggleClass('hidden')
      })
    }
  };
}]);