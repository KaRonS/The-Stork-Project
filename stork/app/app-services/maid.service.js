$window.onbeforeunload = function()
{
    angular.forEach($cookies, function (v, k) {
        $cookieStore.remove(k);
    });
}

(function () {
    'use strict';
    angular.module('app').factory('CartService', CartService);
    CartService.$inject = ['$timeout', '$filter', '$q', '$rootScope', '$cookieStore'];

    function CartService($timeout, $filter, $q, $rootScope, $cookieStore) {
        var service = {};

        service.AddToCart = AddToCart;

        return service;

        function AddToCart(product) {
            if($cookieStore.get('cart') == undefined)
            {
                $cookieStore.put('cart',[]);
            }

            var cart = $cookieStore.get('cart');

            var itemInCart = 0;
            if (cart.length > 0) {
                for(var i = 0; i < cart.length; i++) {
                    if(cart[i].product.name === product.name) {
                        cart[i].quantity += 1;
                        itemInCart += 1;
                    }
                }

                if(itemInCart == 0) {
                    var item = {
                        product: product
                        , quantity: 1
                    }
                    cart.push(item);
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