import { css } from 'styled-components'
import colors from './colors'

export const styledGlobal = css`
  body {
    background: ${colors.mainBgColor};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 22px;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
  }
  p {
  	margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }

`

export default styledGlobal
