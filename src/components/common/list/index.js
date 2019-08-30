import React, { Component } from 'react'

import {
  ListContainer
}from './ListStyleComponents'

import './list.css'

import BScroll from 'better-scroll'
import _ from 'loadsh'

import { Toast } from 'antd-mobile'


// http://p0.meituan.net/w.h/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg
// https://p0.meituan.net/128.180/movie/005955214d5b3e50c910d7a511b0cb571445301.jpg

const Item = props => {
  return(
    <div className="item" data-id="1211270" data-bid="dp_wx_home_movie_list"
      onClick = { props.goDetail }
    >
      <div className="main-block">
        <div className="avatar" sort-flag="">
          
          <div className="default-img-bg">
            <img src = { props.img.replace('w.h','128.180') }  />		
          </div>
        </div> 
        <div className="mb-outline-b content-wrapper">
          <div className="column content">
            <div className="box-flex movie-title">
              <div className="title line-ellipsis v3dimax_title"> { props.nm } </div>
                <span className= { "version " + props.version }></span>
            </div>

            <div className="detail column">
                  <div className="score line-ellipsis"> 
                    <span className="score-suffix">点映评 </span>
                    <span className="grade"> { props.sc} </span>
                  </div>
              
                <div className="actor line-ellipsis">主演: { props.star }</div>
                <div className="show-info line-ellipsis"> { props.showInfo } </div>
            </div>
          </div>

          <div className="button-block" data-id="1211270">
              <div className="btn pre" data-id="1211270"><span className="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>
          </div>
        
        </div>
      </div>
    </div>
  )
}




class List extends Component {


  componentDidMount () {
  

  }

  componentDidUpdate () {
    const bscroll = new BScroll( this.tabContent ,{
      click: true,
      pullUpLoad: {
        threshold: 50
      }
    })
    
    let count = 0
    if( this.props.movies !== null ){
      // 数组分组
      // const ids = _.chunk( arr, size )
      const ids = _.chunk( this.props.movies.movieIds.slice( 12 ),10 )

      console.log( ids ) // [[],[],[]]

      bscroll.on('pullingUp',() => {
        
        
        if ( count < ids.length ) {
          
          this.props.getMoreMovies( ids[ count ].join(','))
          bscroll.finishPullUp() //上拉加载结束
          
        }
        
        if( count === ids.length   ){
          //用户友好提示

          Toast.offline('不要在拽了，已经没有电影了 !!!', 2);

          bscroll.finishPullUp() //上拉加载结束  当没有数据的时候，用户每拉一次，用户友好提示一次
          return 
        }

        count ++

      })

    }

  }


  goDetail = () => {
    this.props.history.push('/shopcar')
  }

  renderItem = () => {
    if( (this.props.movies && this.props.movies[ this.props.data ]) !== undefined ){
      return this.props.movies && this.props.movies[ this.props.data ].map( item => <Item goDetail = { this.goDetail } { ...item } key = { item.id }/>)
    }
  }

  render () {
    return (
      <ListContainer>
        <div className = "tab-content" ref = { el => this.tabContent = el }>
          <div className = "page">
            <div className = "list-wrap">
              { this.renderItem() }
            </div>
          </div>
        </div>
      </ListContainer>
    )
  }
}


export default List