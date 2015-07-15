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
        $scope.goodsDetail = data;
        console.log($scope.goodsDetail);
      }).error(function(err){

      });
});
