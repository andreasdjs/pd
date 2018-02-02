import React, { Component } from 'react'

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

class App extends Component {
  render () {
    return <div className={this.props.className}></div>
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
`
