import React, { Component } from 'react'
import Home from '../../components/Home'

class HomeContainer extends Component {
  render() {
    const message = 'PD'
    return (
      <div>
        <Home message={message} />
      </div>
    )
  }
}

export default HomeContainer
