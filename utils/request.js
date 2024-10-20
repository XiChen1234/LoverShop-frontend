// const config = require("../config/config.js") // baseUrl

// /**
//  * Http Get
//  * @param {str} url 接口url
//  * @param {Object} query url的查询参数
//  * @param {Object} params 其他配置
//  */
// export function getHttp(url, query, params) {
//   return request({
//     url: url,
//     data: query,
//     method: 'GET',
//     ...params
//   })
// }

// /**
//  * Http Post
//  * @param {str} url 接口url
//  * @param {Object} data 请求参数
//  * @param {Object} params 附加配置
//  */
// export function postHttp(url, data, params) {
//   return request({
//     url: url, 
//     data: data, 
//     method: 'POST',
//     ...params
//   })
// }

// export function request(params) {
//   params.url = formatHttp(params.url)
//   var app = getApp()
//   let authorization = app && app.globalData && app.globalData.token ? app.globalData.token : wx.getStorageSync("token"); // 从全局数据或缓存中获取token
//   return new Promise((resolve, reject) => {
//     wx.request({
//       ...params, // 展开运算符，自动将params中的url、method、data进行填充
//       header: {
//         "Content-Type": "application/json; charset=UTF-8",
//         Authorization: authorization,
//       },
//       success: (res) => {
//         resolve(res.data)
//       },
//       fail: (err) => {
//         console.log(err)
//         reject(err)
//       }
//     })
//   })
// }

// /**
//  * 格式化url：
//  * - base64图片、完整url直接返回
//  * - 接口需要拼接
//  * @param {str} value 需要格式化的url
//  */
// function formatHttp(value) {
//   if (!value) return "";
//   if (value.indexOf("data:image") === 0) {
//       return value;
//   }
//   if (value.indexOf("/") === 0) {
//       return config.baseUrl + value;
//   }
//   var url = value;
//   if (!url.match(/^https?:\/\//gi)) {
//       return config.baseUrl + "/" + value;
//   }
//   return url;
// }