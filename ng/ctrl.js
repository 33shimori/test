angular.module('app')
    .controller('PostsCtrl', function($scope,PostsSvc){
        $scope.addPost = function(){
            if($scope.postBody){
                PostsSvc.create({
                    body: $scope.postBody
                }).success(function(){
//                  $scope.posts.unshift(post)
                    $scope.postBody=null                           
                })
            }
        }

// success change to then when use Karma Angular test
        
        PostsSvc.fetch().success(function(posts){
            $scope.posts = posts  
            $scope.$on('ws:new_post', function(_, post){
                $scope.$apply(function(){
                $scope.posts.unshift(post)               
                })
            })
        })
    }) 

// success change to then when use Karma Angular text
