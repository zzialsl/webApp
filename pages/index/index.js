//index.js
//获取应用实例
var functions = require('../functions.js')
var url = 'https://api.douban.com/v2/movie/in_theaters'
var app = getApp()
var pageSize = 10
Page({
  data: {
    films: [],
    hasMore: true,
    showLoading: true,
    start: 0
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '正在热映'
    })
    var that = this
    functions.getCity(function (city) {
      functions.fetchFilms.call(that, url, city, 0, pageSize, function (data) {
        that.setData({
          showLoading: false
        })
      })
    })

  },
  scroll:function(){

  },
  scrolltoupper:function(){
  console.log('上提夹在')
  },
  scrolltolower: function () {
    console.log('下拉刷新')
    var that = this
    functions.getCity(function (city) {
      functions.fetchFilms.call(that, url, city, that.data.start, pageSize, function (data) {
        that.setData({

        })
      })
    })
  },
  viewDetail: function (e) {
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + ds.id + '&title=' + ds.title + '&type=ing'
    })
  }
})
