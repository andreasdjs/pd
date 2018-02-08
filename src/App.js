import React, { Component } from 'react'
import HomeContainer from 'containers/HomeContainer'

import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledGlobal from './styles/styledGlobal'

import { Provider } from 'react-redux'
import store from 'redux/store'

injectGlobal`
  ${styledNormalize}
  ${styledGlobal}
`

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <HomeContainer />
        </Provider>
      </div>
    )
  }
}

export default App
