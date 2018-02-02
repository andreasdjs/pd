import React, { Component } from 'react'
import HomeContainer from './scripts/containers/HomeContainer'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledGlobal from './styles/styledGlobal'

injectGlobal`
  ${styledNormalize}
  ${styledGlobal}
`

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

class App extends Component {
  render () {
    return (
      <AppWrapper>
        <HomeContainer />
      </AppWrapper>
    )
  }
}

export default App
