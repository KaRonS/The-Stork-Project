(function () {
    'use strict';

    angular
        .module('app')
        .factory('ViewService', ViewService);

    ViewService.$inject = ['$rootScope'];
    function ViewService($rootScope) {
        var service = {};

        service.navbar = Navbar;
        service.footer = Footer;

        return service;


        function Navbar(enabled) {
            $rootScope.navbar = {
                enabled: enabled
            };
        }

        function Footer(enabled) {
            $rootScope.footer = {
                enabled: enabled
            };
        }
    }

})();