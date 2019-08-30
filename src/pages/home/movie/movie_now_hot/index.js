import React, { Component } from 'react'

import {
  MovieNowHotContainer
}from './MovieNowHotStyleComponents'

import getStore from 'utils/get_store'

import actionCreators from 'store/home/actionCreators'

import List from 'common/list'

import BScroll from 'better-scroll'
import _ from 'loadsh'

class MovieNowHot extends Component {

  componentDidMount () {
    this.props.getMovies()
  }
 
  

  render () {
    return (
      <MovieNowHotContainer>
        <List { ...this.props } data = "movieList" />
      </MovieNowHotContainer>
    )
  }
}


export default getStore({
  actionCreators,
  UIComponent: MovieNowHot,
  type: 'home'
})