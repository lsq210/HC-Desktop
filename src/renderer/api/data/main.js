import request from '@/utils/request'

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

export function getDailyNationalData(query) {
  // 用于ArcGIS显示要素 GET /getdailynationaldata/?format=json&date=2017-03-01
  // [
  //   {
  //       "id": 2,
  //       "name": "恩施州",
  //       "date": {
  //           year: 2017,
  //           month: 3,
  //           day: 1
  //       },
  //       "position": [
  //           109.506058645958,
  //           30.3058894486114,
  //        ]
  //       "value": [
  //           28.0,
  //           9.0,
  //           21.0,
  //           0.2,
  //           8.0,
  //           3.0
  //       ],
  //       "level": "轻度污染"
  //   },
  // ...
  // ]
  return request({
    url: '/getdailynationaldata',
    method: 'get',
    params: query
  })
}

export function getYearAqiData(query) {
  // 用于日历图 GET /getyearaqidata/?format=json&city=2&year=2017
  // [
  //   [
  //       "2017-01-01",
  //       200.0
  //   ],
  // ...
  // ]
  return request({
    url: '/getyearaqidata',
    method: 'get',
    params: query
  })
}

export function getCityPollutantsByYear(query) {
  // 用于雷达图 GET /getcitypollutantsbyyear/?format=json&city=2&year=2017
  // [
  //   [
  //       28.0,
  //       9.0,
  //       21.0,
  //       0.2,
  //       8.0,
  //       3.0
  //   ],
  //   [
  //       79.2109589041096,
  //       35.0520547945206,
  //       85.4219178082192,
  //       0.919452054794522,
  //       34.4465753424658,
  //       17.0547945205479
  //   ],
  //   [
  //       500.0,
  //       216.0,
  //       920.0,
  //       3.8,
  //       97.0,
  //       70.0
  //   ]
  // ]
  return request({
    url: '/getcitypollutantsbyyear',
    method: 'get',
    params: query
  })
}

export function getCityDaysLeavelByYear(query) {
  // 用于玫瑰图 GET /getcitydaysleavelbyyear/?format=json&city=34&year=2017
  //   [
  //     {
  //         "value": 1,
  //         "name": "严重污染"
  //     },
  //     {
  //         "value": 13,
  //         "name": "中度污染"
  //     },
  //     {
  //         "value": 67,
  //         "name": "优"
  //     },
  //     {
  //         "value": 224,
  //         "name": "良"
  //     },
  //     {
  //         "value": 58,
  //         "name": "轻度污染"
  //     },
  //     {
  //         "value": 2,
  //         "name": "重度污染"
  //     }
  // ]
  return request({
    url: '/getcitydaysleavelbyyear',
    method: 'get',
    params: query
  })
}

export function getdailydatabymouth(query) {
  // 用于散点图和平行坐标图 GET /getdailydatabymouth/?format=json?city=2&year=2017&month=3
  //   [
  //     [1,91,45,125,0.82,34,23,"良"],
  //     ...
  //     [...]
  // ]
  return request({
    url: '/getdailydatabymouth',
    method: 'get',
    params: query
  })
}

export function getDataTimeSpan(query) {
  // 获取污染物时间跨度
  return request({
    url: '/getdatatimespan',
    method: 'get',
    params: query
  })
}

export function getCitiesInfo(query) {
  //获取城市列表 GET /getcitiesinfo/?format=json
  //   [
  //     {
  //         "id": 1,
  //         "cityname": "阿坝州",
  //         "lat": 31.9018292959348,
  //         "lon": 102.22049029261,
  //         "gdp": null,
  //         "pop": null,
  //         "area": null
  //     },
  // ...
  // ]
  return request({
    url: '/getcitiesinfo',
    method: 'get',
    params: query
  })
}
