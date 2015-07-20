angular.module('starter.controllers', [])

.controller('GoodsListController',function($scope,goodsListFactory){
  $scope.goodsListURL = goodsListFactory.getGoodsListURL(4,1,1,1,1);
  goodsListFactory.getGoodsList($scope.goodsListURL).success(function (data) {
    $scope.goodsList = data;
    $scope.goodsListDatasGoodsList = data.datas.goods_list;
  }).error(function (err) {

  });
})
.controller('GoodsDetailController',function($scope,$stateParams,goodsDetailFactory){
      $scope.goodsDetailURL = goodsDetailFactory.getGoodsDetailURl($stateParams.goodsID);
      goodsDetailFactory.getGoodsDetail($scope.goodsDetailURL).success(function(data){
        $scope.goodsDetail = data.datas;
          var imageURLS = $scope.goodsDetail.goods_image;
          $scope.goodsDetailImages = imageURLS.split(",");
          console.log($scope.goodsDetail);
      }).error(function(err){

      });
})
.controller('ArtistListController',function($scope,artistListFactory){

})
.controller('SideMenuController',function($scope,$ionicModal){
        $ionicModal.fromTemplateUrl('templates/login.html',{
            scope:$scope,
            animation:'slide-in-up'
        }).then(function(modal){
            $scope.modal = modal;
        });
        $scope.openModal = function(){
            $scope.modal.show();
        };
        $scope.closeModal = function(){
            $scope.modal.hide();
        };
        $scope.$on('$destroy',function(){
            $scope.modal.remove();
        });

})
.controller('LoginController',['$scope','$rootscope','loginFactory',function($scope,$rootscope,loginFactory){
    $scope.loginURL = loginFactory.getLoginURL($rootscope.userinfo.username,$rootscope.userinfo.password,$rootscope.userinfo.client);
        loginFactory.login($scope.loginURL).success(function(data){
            $rootscope.userinfo = data.datas;
        }).error(function(err){

        });
}]);
