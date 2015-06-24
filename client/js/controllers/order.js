angular
  .module('app')
  .controller('OrderController', ['$scope', '$state', 'Order', function($scope,
      $state, Order) {
    
    $scope.newOrder = {
      delivery: true
    }

    $scope.orders = [];
    function getOrders() {
      Order
        .find()
        .$promise
        .then(function(results) {
          $scope.orders = results;
        });
    }

    getOrders();

    $scope.placeOrder = function() {
      Order
        .create($scope.newOrder)
        .$promise
        .then(function(order) {
          $scope.newOrder = {};
          $scope.orderForm.content.$setPristine();
          $('.focus').focus();
          getOrders();
        });
    };

    $scope.removeOrder = function(id) {
      Order
        .deleteById(id)
        .$promise
        .then(function() {
          getOrders();
        });
    };

    $scope.changeDeliveryStatus = function() {
      console.log('hello');
      $scope.newOrder.delivery = !$scope.newOrder.delivery;
    }
  }]);