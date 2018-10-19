//app.js
App({
   onLaunch: function() {

      //  存储所有页面链接的路径，用来动态跳转页面
      var pageUrlList = {
         study: "/pages/study/study",
         index: "/pages/index/index",
         logs: "/pages/logs/logs",
         coach: "/pages/coach/coach",
         mine: "/pages/mine/mine",
         allClass: "/pages/class/allClass"
      }
      wx.setStorage({
         key: 'pageUrlList',
         data: pageUrlList,
      })

      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
      // 登录
      wx.login({
         success: res => {
            console.log(res.code)
            wx.request({
               url: 'https://api.pmptiku.com/users/GetOpenId',
               // url: 'https://api.pmptiku.com/users/GetOpenId',
               data: {
                  code: res.code
               },
               header: {
                  'content-type': 'application/text' // 默认值
               },
               success(res) {
                  console.log('您的OPENID：'+res.data)
               }

               // dataType:JSON
            })
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
         }
      })
      // 获取用户信息
      wx.getSetting({
         success: res => {
            if (res.authSetting['scope.userInfo']) {
               // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
               wx.getUserInfo({
                  success: res => {
                     // 可以将 res 发送给后台解码出 unionId
                     this.globalData.userInfo = res.userInfo

                     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                     // 所以此处加入 callback 以防止这种情况
                     if (this.userInfoReadyCallback) {
                        this.userInfoReadyCallback(res)
                     }
                  }
               })
            }
         }
      })
   },
   globalData: {
      userInfo: null,
   }


})