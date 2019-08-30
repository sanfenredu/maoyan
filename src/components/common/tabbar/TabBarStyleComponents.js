import styled from 'styled-components'

import { themeColor } from 'components/themecolor';

import border from 'utils/border.js'


export const TabBarContainer = border({
  component: styled.footer`
    width: 100%;
    height: .48rem;
    background: white;
  `,
  width: '1px 0 0 0',
  style: 'solid',
  color: '#d8d8d8',
  radius: 0,
})







export const TabBarUl = styled.ul`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

`

export const TabBarLi = styled.li`
  height: 100%;
  a{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.active{
      i{
        color: ${ themeColor }
      }
      span{
        color: ${ themeColor }
      }
    }
    i{
      font-size: .2rem;
      margin-bottom: .04rem;
      text-align: center;
      color: #696969;
    }
    span{
      font-size: .12rem;
      color: #696969;

    }
  }

`