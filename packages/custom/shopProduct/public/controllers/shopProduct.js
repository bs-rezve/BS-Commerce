'use strict';

/* jshint -W098 */
angular.module('mean.shopProduct').controller('ShopProductController', ['$scope', '$state', 'Global', 'ShopProduct',
  function($scope, $state, Global, ShopProduct) {
    $scope.global = Global;
    var sku = $state.params.sku;

    $scope.product = ShopProduct.get({id: sku});
  }
]);
