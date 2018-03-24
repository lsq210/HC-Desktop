import request from '@/utils/request'

export function test(query) {
  return request({
    url: '/viewspot/userinfo',
    method: 'get',
    params: {
      mail: '990296951@qq.com'
    }
  })
}

export function getTest(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function postTest(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
