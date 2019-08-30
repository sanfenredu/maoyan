import React, { Component } from 'react'


import {
  MovieFHotContainer
}from './MovieFHotStyleComponents'
import List from 'common/list'
import actionCreators from 'store/home/actionCreators';
import getStore from 'utils/get_store'

class MovieFHot extends Component {


  componentDidMount () {
    this.props.getFMovies()
  }
 
  render () {
    return (
      <MovieFHotContainer>
        <List { ...this.props } data = "coming"/>
      </MovieFHotContainer>
    )
  }
}


export default getStore({
  actionCreators,
  UIComponent: MovieFHot,
  type: 'home'
})