import React, { Component } from 'react'
import Home from 'components/Home'
import ControllerContainer from 'containers/ControllerContainer'

import { connect } from 'react-redux'

class HomeContainer extends Component {
  render () {
    const message = 'PD'
    const { value } = this.props
    return (
      <div>
        <ControllerContainer />
        <Home message={message} value={value} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.counter.count })

HomeContainer = connect(mapStateToProps)(HomeContainer)

export default HomeContainer
