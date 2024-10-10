// pages/center/center.js
import {userAPI} from '../../api/userAPI'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: null
  },

  // 点击按钮登陆操作
  toLogin: function () {
    // 获得code
    wx.login({
      success: (res) => {
        userAPI.login(res.code)
          .then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
      },
      fail: (err => {
        console.log(err)
      }) 
    })
    // 获得用户信息
    // 设置用户登陆状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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