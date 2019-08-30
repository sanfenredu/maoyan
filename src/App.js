import React,{ Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import { Button } from 'antd-mobile'




import Head from 'common/head/Head'
import TabBar from 'common/tabbar/TabBar'


// 配置路由

import {
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'

// import Home from './pages/home'
import Home from 'pages/home'
import Category from 'pages/category'
import Error from 'pages/error'
import Mine from 'pages/mine'
import Recommend from 'pages/recommend'
import ShopCar from 'pages/shopcar'



class App extends React.Component{

  constructor () {
    super()
    this.state = {
      backFlag: false
    }
  }

  componentDidMount () {
    this.check_home_to_now_hot()
  }

  componentWillReceiveProps ( nextProps ) {
    this.check_home_to_now_hot( nextProps )
  }

  check_home_to_now_hot ( nextProps ) {
    const {pathname} = nextProps && nextProps.location || this.props.location
    const { push } = nextProps && nextProps.history || this.props.history
    if( pathname === '/home' ){
      push('/home/n-hot')
    }
  }

  render () {
    const { backFlag } = this.state 
    return (
      <Fragment>
       <Head backFlag = { backFlag }/>
       <Switch>
         <Redirect from = '/' to = "/home" exact></Redirect>
         <Route path = '/home' component = { Home }/>
         <Route path = '/category' component = { Category }/>
         <Route path = '/recommend' component = { Recommend }/>
         <Route path = '/mine' component = { Mine }/>
         <Route path = '/shopcar' component = { ShopCar }/>
         <Route  component = { Error }/>
       </Switch>
       <TabBar></TabBar>
      </Fragment>
    )
  }
}

export default withRouter(App);
