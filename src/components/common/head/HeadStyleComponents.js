import styled from 'styled-components'

import { themeColor } from 'components/themecolor';

export const HeadContainer = styled.header`
  width: 100%;
  height: .505rem;
  background: ${ themeColor }
  color: white;
  display: flex;
`

export const HeadBack = styled.div`
  width: .4rem;
  height: 100%;
  padding: 0 .1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    font-size: .3rem;
    font-weight: normal;
  }
`

export const HeadTitle = styled.h3`
  height: 100%;
  text-align: center;
  font-size: .24rem;
  font-weight: normal;
  line-height: .505rem;
  margin: 0;
  flex: 1;
`