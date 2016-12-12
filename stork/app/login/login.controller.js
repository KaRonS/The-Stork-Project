(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService', 'ViewService'];
    function LoginController($location, AuthenticationService, FlashService, ViewService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                    ViewService.navbar(true);
                    ViewService.footer(true);
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                    ViewService.navbar(false);
                    ViewService.footer(false);
                }
            });
        };
    }

})();
