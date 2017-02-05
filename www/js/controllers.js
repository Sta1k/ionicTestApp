angular.module('2p.controllers', [])

.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('LibCtrl', function($scope,API,$state) {
  API.requestLib().then(function (res) {
    $scope.list=res.data;
    console.log(res.data)
  },function (err) {
    console.log(err)
  });
  $scope.click=function (id) {
      $state.go('app.lib/:Id',{Id:id})
  }
})

.controller('BookCtrl', function($scope,API, $stateParams) {
  API.requestBook($stateParams.Id).then(function (res) {
    console.log(res);
    $scope.book=res.data[0]
  },function (err) {
    console.log(err)
  })
});
