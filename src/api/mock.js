import Mock from 'mockjs'
// const Mock = require('mockjs');
//获取mock.Random对象，这个也是一个工具类，是可以生成
//各种的随机数据的
/* const Random =Mock.Random;
  const newsData = function() {
  let articles = []
  for(let i = 0; i < 108; i++) {
  let newsObj = {
  title: Random.csentence(5,12),
  date: Random.date()
  }
  articles.push(newsObj)
  }
      return {
      articles: articles
      }
  }
  Mock.mock('/api', 'post', newsData);
 */
Mock.mock('/api', {
  txt: '你好000000000000000000000000000000000',
})
// Random.constellation()
// => "水瓶座"
// Mock.mock('@CONSTELLATION')
// => "天蝎座"
// Mock.mock({
//     constellation: '@CONSTELLATION'
// })
//
