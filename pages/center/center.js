// pages/center/center.js
import {userAPI} from '../../api/userAPI'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },

  // 点击按钮登陆操作
  toLogin: function () {
    // 获得code
    wx.login({
      success: (res) => {
        this.login(res.code)
      },
      fail: (err => {
        console.log(err)
      }) 
    })
  },

  /**
   * 用户登陆操作
   * @param {str} code 临时代码
   */
  login(code) {
    userAPI.login(code)
    .then(res => {
      console.log(res)
      this.setData({
        userInfo: {
          username: res.username,
          avatarUrl: res.avatarUrl,
          motto: res.motto
        }
      })
      wx.setStorageSync('userInfo', this.data.userInfo)
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
        this.setData({
            userInfo: userInfo
        })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})