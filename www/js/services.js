angular.module('starter.services', [])

  .factory('goodsListFactory',function($http){
        //alert('2222222');

        var getGoodsListURL = function(goods_list_key,goods_list_order,goods_list_page,goods_list_curpage,goods_list_gc_id){
        return 'http://mall.kachuo.com/mobile/index.php?act=goods&op=goods_list&key='+goods_list_key+'&key='+goods_list_order+'&page='+goods_list_page+'&curpage='+goods_list_curpage+'&gc_id='+goods_list_gc_id+'&callback=JSON_CALLBACK';
      };

      var getGoodsList = function(url){
        return $http.jsonp(url);
      };
      return {
        getGoodsList:getGoodsList,
        getGoodsListURL:getGoodsListURL
      };
  }).factory('goodsDetailFactory',function($http,$stateParams){
        alert('111111');
        var goodsDetailID = $stateParams.goodsID;

      var getGoodsDetailURL = function(goodsID){
        return 'http://mall.kachuo.com/mobile/index.php?act=goods&op=goods_detail&goods_id='+goodsID+'&callback=JSON_CALLBACK';
      };
      var getGoodsDetail = function (url) {
        return $http.jsonp(url);
      };
      return {
        getGoodsDetailURl:getGoodsDetailURL,
        getGoodsDetail:getGoodsDetail
      };
  }).factory('artistListFactory',function($http){
        alert('333');

        var getArtistListURL = function(){
        return '';
      };
      var getArtistList = function (url) {
        return $http.jsonp(url);
      };
      return {
        getArtistListURL:getArtistListURL,
        getArtistList:getArtistList
      };
    });