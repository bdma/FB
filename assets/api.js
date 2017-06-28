var baseUrl = 'http://0.0.0.0:4000'
var API = {
  handleData: function (response) {
    // console.log('我干活啦response.data')
    // console.log('1原response：', response)
    // console.log('2原response.data：', response.data)
    if (response.data.code === '0') {
      return response.data.data
    } else {
      // return response.data
      console.log('9失败response：', response)
      alert(response.data.message)
    }
  },
  org: baseUrl + '/org/'
}

export default API
