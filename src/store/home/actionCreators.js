

import http from 'utils/http'

import * as type from './type'

const actionCreators = {
  getBanners () {
    return  async dispatch => {
      const result = await http({
        url: '/data/banner.json',
      })

      const action = {
        type: type.GET_BANNERS,
        payload: result.data 
      }

      dispatch( action )
    }
  },
  getMovies () {
    return  async dispatch => {
      const result = await http({
        url: '/ajax/movieOnInfoList',
        params: {
          token: ''
        }
      })

      const action = {
        type: type.GET_MOVIES,
        payload: result.data 
      }

      dispatch( action )
    }
  },
  getFMovies () {
    return  async dispatch => {
      const result = await http({
        url: '/ajax/comingList',
        params: {
          ci: 1,
          token: '',
          limit: 10
        }
      })

      const action = {
        type: type.GET_F_MOVIES,
        payload: result.data 
      }

      dispatch( action )
    }
  },
  getMoreMovies ( ids ) {
    return  async dispatch => {
      const result = await http({
        url: '/ajax/moreComingList',
        params: {
          token: '',
          movieIds: ids
        }
      })

      const action = {
        type: type.GET_MORE_MOVIES,
        payload: result.data.coming 
      }

      dispatch( action )
    }
  },
}


export default actionCreators