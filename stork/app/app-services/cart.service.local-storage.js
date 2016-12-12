(function () {
    'use strict';
    angular.module('app').factory('CartService', CartService);
    CartService.$inject = ['$timeout', '$filter', '$q', '$rootScope', '$cookieStore'];

    function CartService($timeout, $filter, $q, $rootScope, $cookieStore) {
        var service = {};
        
        service.AddToCart = AddToCart;
        service.setCart = setCart;
        
        return service;
        
        function setCart()
        {
            var cart = $cookieStore.get('cart');
            $rootScope.globals.cart = cart;
        }
        
        function AddToCart(product) {
            if($cookieStore.get('cart') == undefined)
            {
                $cookieStore.put('cart',[]);
            }
            
            var cart = $cookieStore.get('cart');
            
            var itemInCart = 0;
            if (cart.length > 0) {
                var productIndex;
                for(var i = 0; i < cart.length; i++) {
                    if(cart[i].product.name === product.name) {
                        itemInCart += 1;
                        productIndex = i;
                    }
                }
                
                if(itemInCart == 0) {
                    var item = {
                        product: product
                        ,quantity: 1
                    }
                    cart.push(item);
                }
                else
                    {
                        cart[i].quantity += 1;
                    }
            }
            else {
                var item = {
                    product: product
                    , quantity: 1
                }
                cart.push(item);
            }
            
            $rootScope.globals.cart = cart;
            $cookieStore.put('cart', cart);
        }
    }
})();