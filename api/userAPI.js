const request = require('../utils/request')
const modelUrl = '/user'

// api列表，向下扩展
var login = function (params) {
  return request.post({
    url: modelUrl + '/login',
    data: {
      "code": "0d3Umz100icrXS1HY4100WhyF11Umz1p"
    }
  })
}

module.exports = {
  login
}