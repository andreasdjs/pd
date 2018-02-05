import React, { Component } from 'react'
import HomeContainer from './scripts/containers/HomeContainer'
import styled, { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledGlobal from './styles/styledGlobal'

injectGlobal`
  ${styledNormalize}
  ${styledGlobal}
`

class App extends Component {
  render () {
    return (
      <div>
        <HomeContainer />
      </div>
    )
  }
}

export default App
