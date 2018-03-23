import { param2Obj } from '@/utils'

const userMap = {
  lsq210: {
    roles: ['admin', 'front-end'],
    token: 'lsq210',
    introduction: '管理员',
    avatar: 'https://avatars1.githubusercontent.com/u/34806806?s=460&v=4',
    name: 'lsq210'
  },
  GCCCCG: {
    roles: ['admin', 'front-end'],
    token: 'GCCCCG',
    introduction: '管理员',
    avatar: 'https://avatars2.githubusercontent.com/u/33160675?s=460&v=4',
    name: 'GCCCCG'
  },
  HaoKunT: {
    roles: ['admin', 'back-end'],
    token: 'HaoKunT',
    introduction: '管理员',
    avatar: 'https://avatars0.githubusercontent.com/u/16379361?s=460&v=4',
    name: 'HaoKunT'
  },
  guest: {
    roles: ['guest'],
    token: 'guest',
    introduction: '游客',
    avatar: 'https://avatars1.githubusercontent.com/u/37378029?s=200&v=4',
    name: 'guest'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
