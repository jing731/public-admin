// 文章相关的请求
import request from '@/utils/request'
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    params
  })
}
