import request from '@/utils/request'
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data
  })
}
export const getUserProfile = () => {
  // const user = JSON.parse(window.localStorage.getItem('user'))
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile'
    // headers: {
    //   // 利用代码的方式去获取token
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}
// 使用拦截器统一设置token
// 需要两个参数  两个参数都是回掉函数
request.interceptors.request.use(
  // config 是当前请求的配置对象  会携带config去请求 并且此参数可以修改
  function (config) {
    // 注意 需要将token将json格式转化为对象
    const user = JSON.parse(window.localStorage.getItem('user'))
    // 如果有登陆用户信息 则统一设置token
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    // 特别重要  return config 才是真正发送请求  不return则请求发送不出去
    return config
  },
  function (error) {
    console.log('请求失败')
    return Promise.reject(error)
  }
)
