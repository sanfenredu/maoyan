import React, { Component } from 'react'
import './banner.css'
import Swiper from 'swiper'


import actionCreators from 'store/home/actionCreators';

import getStore from 'utils/get_store'


const Item = props => {
  return  (
    <div className="swiper-slide">
      <img src = { props.img }/>
    </div>
  )
}

class Banner extends Component {


  componentDidMount () {
    //进行数据请求

    this.props.getBanners()



  }

  renderItem = () => {
    return this.props.banners && this.props.banners.map( item => <Item { ...item } key = { item.id }/>)
  }

  render () {
    return (
      <div className="swiper-container" ref = { el => this.homebanner = el }>
        <div className="swiper-wrapper">
           { this.renderItem() }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }


  componentDidUpdate () {
    if( this.swiper ) return false
    this.swiper = new Swiper ( this.homebanner, {
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
    })        
  }

}


export default getStore({
  actionCreators,
  UIComponent: Banner,
  type: 'home'
})