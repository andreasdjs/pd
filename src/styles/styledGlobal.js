import { css } from 'styled-components'
import colors  from './colors'

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
    margin: 0;
    padding: 0;
  }
`

export default styledGlobal
