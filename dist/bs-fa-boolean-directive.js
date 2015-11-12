angular.module('bsfaBoolean.directive', ['bsfaBoolean.controller','bs-fa-boolean.template'])
  .directive('bsfaboolean', bsfaBoolean)

function bsfaBoolean($templateCache) {
 var directive = {
    restrict: 'E',
    scope: {
      value: '='
    },
    controller:'bsfaBooleanController',
    controllerAs:'bsfaBoolean',
    bindToController: true,
    template: $templateCache.get('bs-fa-boolean.view.html')
  };
  
  return directive;
}
bsfaBoolean.$inject = ["$templateCache"];;
angular.module('bsfaBoolean.controller', [])
.controller('bsfaBooleanController',bsfaBooleanController);

function bsfaBooleanController () {
  var vm = this;
};
angular.module("bs-fa-boolean.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("bs-fa-boolean.view.html","<i class=\"fa fa-check text-success\" ng-if=\"bsfaBoolean.value\"></i>\n<i class=\"fa fa-times text-danger\" ng-if=\"!bsfaBoolean.value\"></i>");}]);
//# sourceMappingURL=bs-fa-boolean-directive.js.map
