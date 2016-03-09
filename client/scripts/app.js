angular.module('myApp', [])

.controller('formCtrl', ['$scope', '$http', function($scope, $http){
    $scope.formData = {};
    $scope.editData = {};
    $scope.deleteData = {};
    
    $scope.addLion = function(){
       
       $scope.formData = this.formData;
        $http.post('/lions', $scope.formData).then(function(res){
           return res.data;
        });
    }
    
    $scope.getLion = function () {
        
        $http.get('/lions').then(function(res){
           $scope.outs = res.data;
        });
    }
    
    $scope.editLion = function (){
        $scope.editData = this.editData;
        $http.put('/lions', $scope.editData).then(function(res){
           return res; 
        });
    }
    
    $scope.deleteLion = function () {
        $scope.deleteData = this.deleteData;
         console.log($scope.deleteData);
        $http.delete('/lions', $scope.deleteData).then(function(res){
            console.log(res.data);      
        });
       
    }
   
}]);