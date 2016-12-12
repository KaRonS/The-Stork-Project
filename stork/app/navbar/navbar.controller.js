(function(){
    'use strict';

    angular
        .module('app')
        .controller('NavbarController', NavbarController);
    
    NavbarController.$inject = ['$scope', '$rootScope','$location', '$route', '$cookieStore'];
    function NavbarController($scope, $rootScope, $location, $route, $cookieStore){
        $scope.isCollapsed = true;
        $scope.supplyTypes = ['Notepads','Pens','Pencils','Erasers','Folders'];
        $scope.computerTypes = ['Software','Hardware'];
        
        $scope.setProductType = setProductType;
        
        initController();
        
        function initController()
        {
            setupCart();
        }
        
        function setupCart()
        {
            var cartTotal = $cookieStore.get('cartTotal');
            $rootScope.globals.cartTotal = cartTotal;
        }
        
        function setProductType(type)
        {
            
            $cookieStore.put('productType', type);
            if($location.path() === '/products')
                {
                    $route.reload();
                }
        }
        
    }
})();
