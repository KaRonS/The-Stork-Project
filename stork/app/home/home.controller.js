(function () {
    'use strict';
    angular.module('app').controller('HomeController', HomeController);
    HomeController.$inject = ['UserService', '$rootScope', 'ViewService', 'AuthenticationService', '$cookieStore'];

    function HomeController(UserService, $rootScope, ViewService, AuthenticationService, $cookieStore) {
        var vm = this;
        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.logout = logout;
        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
            if ($cookieStore.get('cartTotal') == undefined) {
                $cookieStore.put('cartTotal', 0);
            }
            ViewService.navbar(true);
            ViewService.footer(true);
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username).then(function (user) {
                vm.user = user;
            });
        }

        function loadAllUsers() {
            UserService.GetAll().then(function (users) {
                vm.allUsers = users;
            });
        }

        function deleteUser(id) {
            UserService.Delete(id).then(function () {
                loadAllUsers();
            });
        }

        function logout() {
            ViewService.navbar(false);
            ViewService.footer(false);
            AuthenticationService.ClearCredentials();
            $cookieStore.remove('cartTotal');
            $cookieStore.remove('cart');
            $cookieStore.remove('products');
        }
    }
})();