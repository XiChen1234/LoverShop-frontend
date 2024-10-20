// pages/center/center.js
import {userAPI} from '../../api/userAPI'

Page({
  data: {
    userInfo: null
  },

  // 点击按钮登陆操作
  toLogin: function () {
    wx.login({
      success: (res) => {
        if(res.code) {
          
        } else {
          wx.showToast({
            title: '出了点小差错，请稍后重试哦~',
            icon: 'none'
          })
        }
      },
    })
  },

})