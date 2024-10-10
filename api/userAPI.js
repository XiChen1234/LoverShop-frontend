const request = require('../utils/request')
const modelUrl = '/user'

// api列表，向下扩展
var login = function (param) {
  return request.post({
    url: modelUrl + '/login',
    data: {
      "code": param
    }
  })
}

module.exports = {
  userAPI: {
    login
  }
}