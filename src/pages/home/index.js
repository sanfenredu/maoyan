import React,{ Component } from 'react'

import Banner from './Banner'

import { 
  HomeContainer
 }from './HomeStyleComponents'

import Movie from './movie'

class Home extends Component{

  render () {

    return (
      <HomeContainer>
          <Banner/>
          <Movie></Movie>
      </HomeContainer>
    )

  }

}


export default Home