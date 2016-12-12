(function () {
        'use strict';
        angular.module('app').controller('ProductController', ProductController);
        ProductController.$inject = ['$rootScope', '$cookieStore', 'ProductService', 'CartService', 'ViewService'];

        function ProductController($rootScope, $cookieStore, ProductService, CartService, ViewService) {
            var vm = this;
            vm.products = [];
            vm.addToCart = addToCart;
            initController();

            function initController() {
                loadProducts();
                ViewService.navbar(true);
                ViewService.footer(true);
            }

            function loadProducts() {
                var type = $cookieStore.get('productType');
                ProductService.GetByType(type).then(function (response) {
                    vm.products = response;
                });
            }

            function addToCart(product) {
                CartService.AddToCart(product);
                
                var oldCartTotal = $cookieStore.get('cartTotal');
                var newCarTotal = oldCartTotal + 1;
                $rootScope.globals.cartTotal = newCarTotal;
                $cookieStore.put('cartTotal', newCarTotal);
            }
        }
    }
)();