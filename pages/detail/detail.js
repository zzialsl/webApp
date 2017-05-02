Page({
  data: {
    film: {},
    showLoading: true,
    options: null
  },
//    onPullDownRefresh: function () {
//     console.log('--------onPullDownRefresh下拉刷新-------')
//   },
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
 
    console.log(options.id);
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + options.id,
      
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var data = res.data
        that.setData({
          film: data,
          showLoading: false
        })
      }
    })
  }
})