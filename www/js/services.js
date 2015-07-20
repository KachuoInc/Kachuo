angular.module('starter.services', [])

  .factory('goodsListFactory',function($http){
        var getGoodsListURL = function(goods_list_key,goods_list_order,goods_list_page,goods_list_curpage,goods_list_gc_id){
        return 'http://mall.kachuo.com/mobile/index.php?act=goods&op=goods_list&key='+goods_list_key+'&key='+goods_list_order+'&page='+goods_list_page+'&curpage='+goods_list_curpage+'&gc_id='+goods_list_gc_id+'&callback=JSON_CALLBACK';
      };

      var getGoodsList = function(url){
        return $http.jsonp(url,{cache:true});
      };
      return {
        getGoodsList:getGoodsList,
        getGoodsListURL:getGoodsListURL
      };
  }).factory('goodsDetailFactory',function($http){
      var getGoodsDetailURL = function(goodsID){
        return 'http://mall.kachuo.com/mobile/index.php?act=goods&op=goods_detail&goods_id='+goodsID+'&callback=JSON_CALLBACK';
      };
      var getGoodsDetail = function (url) {
        return $http.jsonp(url,{cache:true});
      };
      var  buyNow = function(){

      };
      return {
        getGoodsDetailURl:getGoodsDetailURL,
        getGoodsDetail:getGoodsDetail,
        buyNow:buyNow
      };
  }).factory('artistListFactory',function($http){
        var getArtistListURL = function(){
        return '';
      };
      var getArtistList = function (url) {
        return $http.jsonp(url,{cache:true});
      };
      return {
        getArtistListURL:getArtistListURL,
        getArtistList:getArtistList
      };
    }).factory('loginFactory',function($http){
        var getLoginURL = function(username,password,client){
          return 'http://mall.kachuo.com/mobile/index.php?act=login&username='+username+'&password='+password+'&client='+client+'&callback=JSON_CALLBACK';
        };
        var login = function(url){
            return $http.jsonp(url);
        };
        return {
          getLoginURL:getLoginURL,
          login:login
        };
    });