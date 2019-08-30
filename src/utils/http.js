/* 
  axios封装
*/

import axios from 'axios'


const http = ({
  //用于接收axios参数
  url,
  method,
  params,
  headers,
  data
}) => {
  return new Promise( ( resolve,reject ) => {
    axios({
      url,
      method: method && method || 'get',
      params,
      headers,
      data
    }).then( res => {
      resolve( res )
    }).catch( error => {
      if( error ) console.log( error )
    })
  })
}

export default http 