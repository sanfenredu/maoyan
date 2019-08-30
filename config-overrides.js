/* 
  webpack配置文件
*/

 const path = require( 'path' )

 const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');


 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   addWebpackAlias({
    //  路径别名：路径
    'assets': path.join( __dirname,'./src/assets'),
    'img': path.join( __dirname,'./src/assets/img'),
    'stylesheets': path.join( __dirname,'./src/assets/stylesheets'),
    'components': path.join( __dirname,'./src/components'),
    'common': path.join( __dirname,'./src/components/common'),
    'layout': path.join( __dirname,'./src/components/layout'),
    'lib': path.join( __dirname,'./src/lib'),
    'pages': path.join( __dirname,'./src/pages'),
    'store': path.join(__dirname,'./src/store'),
    'utils': path.join( __dirname,'./src/utils')
   })
 );