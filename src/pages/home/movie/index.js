import React, { Component } from 'react'

import {
  MovieContainer,
  MovieNavContainer,
  MovieNavCityContainer,
  MovieNavUl,
  MovieNavLi,
  MovieSearch
}from './MovieStyleComponents'

import MovieNowHot from './movie_now_hot/index';

import MovieFHot from './movie_f_hot/index';

import { Route,NavLink } from 'react-router-dom'

class Movie extends Component {

  constructor () {
    super()
    this.state = {
      name: 'yyb'
    }
  }

  render () {
    return (
      <MovieContainer>
        {/* 导航 */}
        <MovieNavContainer>
          
          <MovieNavCityContainer>
            <span> 北京 </span>
            <i className = "fa fa-sort-desc"></i>
          </MovieNavCityContainer>
          
          <MovieNavUl>
            <MovieNavLi>
              <NavLink to = { {pathname: '/home/n-hot'}} activeClassName = "active">
                正在热映
              </NavLink>
            </MovieNavLi>
            <MovieNavLi>
              <NavLink to = { {pathname: '/home/f-hot'}} activeClassName = "active">
                即将上映
              </NavLink>
            </MovieNavLi>


          </MovieNavUl>
          
          <MovieSearch>
            <i className = "fa fa-search"></i>
          </MovieSearch>

        </MovieNavContainer>
        {/* 长列表 */}
        <Route path = "/home/n-hot" component= { MovieNowHot }/>
        <Route path = "/home/f-hot" component= { MovieFHot }/>
      </MovieContainer>
    )
  }
}


export default Movie