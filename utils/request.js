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
        if(res.data.status === 200) {
          resolve(res.data.data)
        } else {
          reject(res.data.status, res.data.message)
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