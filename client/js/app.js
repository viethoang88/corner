angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('order', {
        url: '',
        templateUrl: 'views/order.html',
        controller: 'OrderController'
      });

    $urlRouterProvider.otherwise('order');
  }]);