(function () {
    'use strict';
    angular.module('app').controller('CartController', CartController);
    CartController.$inject = ['$rootScope', 'CartService', 'ViewService'];

    function CartController($rootScope, CartService, ViewService) {
        var vm = this;
        vm.cart = [];
        initController();

        function initController() {
            loadCart();
        }

        function loadCart() {
            CartService.setCart();
            vm.cart = $rootScope.globals.cart;
            ViewService.navbar(true);
            ViewService.footer(true);
        }

    }
})();