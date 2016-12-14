(function () {
    'use strict';
    angular.module('app').factory('ProductService', ProductService);
    ProductService.$inject = ['$timeout', '$filter', '$q'];

    function ProductService($timeout, $filter, $q) {
        var service = {};
        service.GetByType = GetByType;
        SetProducts();
        return service;

        function GetByType(type) {
            var deferred = $q.defer();
            var products = GetProducts();
            var filtered = [];
            
            for(var i = 0; i < products.length; i++)
                {
                    if(products[i].type === type)
                        {
                            filtered.push(products[i]);
                        }
                }
            deferred.resolve(filtered);
            return deferred.promise;
        }

        function SetProducts() {
            var products = [
                {
                    name: "Notepad"
                    , type: "Notepads"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "data:image/jpeg;base64,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",
                    price: 18
                }
                , {
                    name: "Pen"
                    , type: "Pens"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1gjOvr64DEiXeCz4imrilAqE-wCurdHDOss6FLhCVZAEuDRZ82w"
                    ,price: 9
                }
                , {
                    name: "Pencil"
                    , type: "Pencils"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo6K8VqxG1T4cUvV63pp-qkyYbeGZwAwFZXYGmkt6QxnDoN6LlPg"
                    ,price: 12
                }
                , {
                    name: "Eraser"
                    , type: "Erasers"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkzntta6QlDHlKK5FGGJAn7KOx_xLxhEIZs_lD5ewYYfC2q_lTw"
                    ,price: 15
                }
                , {
                    name: "Folder"
                    , type: "Folders"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJpMhOoWRKi3EQkdBQw0Od6hfx9hj6JNw9I4fLdblDKwCumR25"
                    ,price: 10
                }
                , {
                    name: "Software"
                    ,type: "Software"
                    ,description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    ,picture: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSExjxILRIab4JgxhgXW_3M2BB59P5mQsUnGdx8IjzSRsjTcF3x"
                    ,price: 60
                }
                , {
                    name: "Hardware"
                    , type: "Hardware"
                    , description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                    , picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSrlg4IXgZe_DyRN1FaYpKiiJHblcqOWzdYLFMVrB_eC_cL2WU"
                    ,price: 100
                }
            ];
            localStorage.products = JSON.stringify(products);
        }

        function GetProducts() {
            if (!localStorage.products) {
                localStorage.products = JSON.stringify([]);
            }
            return JSON.parse(localStorage.products);
        }
    }
})();