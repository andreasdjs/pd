import React, { Component } from 'react'
import Home from '../../components/Home'
import styled from 'styled-components'

const HomeContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`

class HomeContainer extends Component {
  render() {
    const message = 'PD'
    return (
      <HomeContainerWrapper>
        <Home message={message} />
      </HomeContainerWrapper>
    )
  }
}

export default HomeContainer
