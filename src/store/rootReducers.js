import { combineReducers } from 'redux'

import home from './home/reducers'

const rootReducers = combineReducers({
  //分片的reducers
  home
})


export default rootReducers