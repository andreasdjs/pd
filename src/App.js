import React, { Component } from 'react'
import HomeContainer from './scripts/containers/HomeContainer'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

const mainBgColor = '#f0f0f0'

injectGlobal`
  ${styledNormalize}

   body {
     background-color: ${mainBgColor};
     font-size: 22px;
   }
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }
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
