angular.module('app')
        .config(function($routeProvider, $locationProvider){
            $routeProvider
            .when('/',{controller: 'PostsCtrl', 
                    templateUrl: 'posts.html'})
            .when('/register', {controller: 'RegisterCtrl', templateUrl: 'regster.html'})
            .when('/login',{controller: 'LoginCtrl', templateUrl: 'login.html'})
    
            $locationProvider.html5Mode(true)
})


