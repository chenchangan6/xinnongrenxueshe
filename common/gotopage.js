// 这个页面，目前没用。

var GoToPage = {
   // 获取url路径
   GetPageUrl: function(urlname) {
      var PageUrlList = wx.getStorageSync("pageUrlList")
      return PageUrlList[urlname]
   },
   // 跳转页面链接
   GoToPage: function(event) {

      wx.navigateTo({
         url: this.GetPageUrl(event.currentTarget.dataset.pageUrl),
         success: function(res) {},
         fail: function(res) {},
         complete: function(res) {},
      })
   }
}
export default GoToPage