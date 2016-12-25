myApp.factory('UserService', ['$resource',
    function($resource) {
        return {
            findUserById: function(id) {
                var url = "http://mocker.egen.io//users//"+id;
                return $resource(url, {}, {
                    query: {
                        method: 'GET'
                    }
                });
            },
            findUsers: function() {
                var url = "http://mocker.egen.io//users";
                return $resource(url, {}, {
                    query: {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        isArray: true
                    }
                });
            }
        };
    }
]);