import React,{ Component } from 'react'

import {
  TabBarContainer,
  TabBarUl,
  TabBarLi
}from './TabBarStyleComponents'

import { NavLink } from 'react-router-dom'

const Item = props => {
  return (
    <TabBarLi>
      <NavLink to = {{pathname: props.to }} activeClassName = "active">
        <i className = { "fa fa-"+props.class }></i>
        <span> { props.text } </span>
      </NavLink>
    </TabBarLi>
  ) 
}

class TabBar extends Component {
  /*  首页  分类   购物车  推荐  我的  */

  constructor () {
    super()
    this.state = {
      tabbars: [
        {
          id: 1,
          class: 'home',
          text: '首页',
          to: '/home'
        },
        {
          id: 2,
          class: 'navicon',
          text: '分类',
          to: '/category'
        },
        {
          id: 3,
          class: 'star',
          text: '推荐',
          to: '/recommend'
        },
        {
          id: 4,
          class: 'shopping-cart',
          text: '购物车',
          to: '/shopcar'
        },
        {
          id: 5,
          class: 'user-circle',
          text: '我的',
          to: '/mine'
        },
      ]
    }
  }

  renderItem = () => {
    return this.state.tabbars.map( item => <Item {...item} key = { item.id } />)
  }

  render () {
    return (
      <TabBarContainer>
        <TabBarUl>
         { this.renderItem() }
        </TabBarUl>
      </TabBarContainer>
    )

  }

}


export default TabBar