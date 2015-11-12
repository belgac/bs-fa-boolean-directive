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