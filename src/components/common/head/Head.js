import React,{ Component } from 'react'

import {
  HeadContainer,
  HeadBack,
  HeadTitle
}from './HeadStyleComponents'

class Head extends Component {

  render () {
    const { backFlag } = this.props
    return (
      <HeadContainer>
        { backFlag && <HeadBack><i className = "fa fa-arrow-left"></i></HeadBack>}
        <HeadTitle>
          Gabriel Yan
        </HeadTitle>
      </HeadContainer>
    )

  }

}


export default Head