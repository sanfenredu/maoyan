/* 
  反向代理配置文件
*/
const proxy = require( 'http-proxy-middleware' )
module.exports = function ( app ) {
  // http://m.maoyan.com/ajax/movieOnInfoList?token=
  // app.use(proxy(标记，配置))

  app.use(proxy('/ajax',{
    target: 'http://m.maoyan.com',
    changeOrigin: true
  }))

}