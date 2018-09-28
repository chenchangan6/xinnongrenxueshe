// pages/study/study.js
//获取应用实例
const app = getApp()
Page({

   /**
    * 页面的初始数据
    */
   data: {
      userInfo: "",
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      imgUrls: [
         '/testimg/studylunbo/1.png ',
         '/testimg/studylunbo/2.png ',
         '/testimg/studylunbo/3.png '

      ],
      classlist: [{
            classimg: "/testimg/tuijianhaoke/4.png",
            classTitle: "早熟柑橘品种采果后的管理工作为来年打下基础",
            teacher: "龙泉"

         },
         {
            classimg: "/testimg/tuijianhaoke/2.png",
            classTitle: "溯源“不知火”（丑柑），避免树势衰弱黄华",
            teacher: "杨敏"

         }, {
            classimg: "/testimg/tuijianhaoke/3.png",
            classTitle: "叶面喷肥收效甚微？难道真是产品质量问题吗？",
            teacher: "龙泉"

         }, {
            classimg: "/testimg/tuijianhaoke/1.png",
            classTitle: "早熟柑橘品种采果后的管理工作为来年打下基础",
            teacher: "龙泉"

         }
      ]
   },
   // 存储用户的信息。
   saveUserInfo: function(userInfo) {
      this.setData({
         userInfo: userInfo,
         hasUserInfo: true
      })
      wx.setStorage({
         key: 'userInfo',
         data: userInfo,
      })
      // console.log(userInfo)
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function() {
      if (app.globalData.userInfo) {
         this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true
         })
      } else if (this.data.canIUse) {
         // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
         // 所以此处加入 callback 以防止这种情况
         app.userInfoReadyCallback = res => {
            this.saveUserInfo(res.userInfo)
         }
      } else {
         // 在没有 open-type=getUserInfo 版本的兼容处理
         wx.getUserInfo({
            success: res => {
               app.globalData.userInfo = res.userInfo
               this.saveUserInfo(res.userInfo)
            }
         })
      }
   },
   //手动获取用户信息
   getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.saveUserInfo(e.detail.userInfo)

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})