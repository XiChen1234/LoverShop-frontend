const baseUrl = 'http://localhost:8080/api' // 基础url配置

function post(params) {
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + params.url,
      data: params.data,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if(res.code === 200) {
          resolve
        } else {
          reject
        }
      },
      fail: function (err) {
        console.log(err)
      }
    })
  })
  return promise
}

module.exports = {
  post
} 