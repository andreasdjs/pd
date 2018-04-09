import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer from 'containers/AppContainer'

import { Provider } from 'react-redux'
import store from 'redux/store'

import { injectGlobal } from 'styled-components'
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
        <Provider store={store}>
          <Router>
            <AppContainer />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
