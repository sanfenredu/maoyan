import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const getStore = ({
  actionCreators,
  UIComponent,
  type
}) => {

  return connect(
    state => state[type],
    dispatch => bindActionCreators( actionCreators,dispatch )
  )( UIComponent ) 

}


export default getStore