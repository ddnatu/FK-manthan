app.controller('myCtrl', function($scope,MyService) {
    $scope.txt = MyService.addNums("abc");
    console.log('text',$scope.txt);
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    var x = MyService.getData();
    x.then(function(data){
        console.log('data',data);
    },function(error){
        console.log('error',error);
    })
});