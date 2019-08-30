
import state from './state'

import * as type from './type'

const reducers = ( previousState = state,action ) => {

  const newState = {
    ...previousState
  }

  switch ( action.type ) {
    case type.GET_BANNERS:
      newState.banners = action.payload
      break;
    case type.GET_MOVIES:
      newState.movies = action.payload
      break;
    case type.GET_F_MOVIES:
      newState.movies = action.payload
      break;
    case type.GET_MORE_MOVIES:
      newState.movies.movieList.push( ...action.payload )
      console.log( newState.movies.movieList )
      break;
  
    default:
      break;
  }

  return newState

}


export default reducers