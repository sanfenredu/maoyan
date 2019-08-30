
import styled from 'styled-components'

import { themeColor } from 'components/themecolor/index';

import border from 'utils/border'

export const MovieContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`


//  70  210 95
export const MovieNavContainer = border({
  component: styled.div`
    display: flex;
    font-size: .15rem;
    align-items: center;
  `,
  width: '0 0 1px 0',
  style: 'solid',
  color: '#696969',
  radius: 0,
})




export const MovieNavCityContainer = styled.div`
  flex: 70;
  padding: .15rem;
  display: flex;
  align-items: center;
  i{
    margin-top: -.08rem;
    margin-left: .04rem;
    color: #b0b0b0;
  }
  span{
    color: #666;
  }
`

export const MovieNavUl = styled.ul`
  flex: 210;
  display: flex;
  justify-content: space-around;
  height: .45rem;
`

export const MovieNavLi = styled.li`
  a{
    text-align: center;
    display: block;
    line-height: .45rem;
    color: #666;
    font-weight: 700;
    padding: 0 .12rem;
    &.active{
      color: ${ themeColor }
      border-bottom: 2px solid ${ themeColor }
    }
  }
`


export const MovieSearch = styled.div`
  flex: 95;
  display: flex;
  justify-content: flex-end;
  padding-right: .15rem;
  i{
    font-size: .2rem;
    color: ${ themeColor }
  }
`