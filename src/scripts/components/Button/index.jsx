// @flow

import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import colors from '../../../styles/colors'

const borders = props => props.roundCorners && '50px'
const INITIAL = 'initial'
const SPEED = '160ms'

const primary = {
  fg: colors.white,
  bg: colors.primary,
  border: colors.primary,
  borderRadius: borders
}

const whiteGhost = {
  fg: colors.white,
  bg: INITIAL,
  border: colors.white,
  borderRadius: borders
}

const blackGhost = {
  fg: colors.black,
  bg: INITIAL,
  border: colors.black,
  borderRadius: borders
}

const inverted = {
  fg: colors.primary,
  bg: colors.white,
  border: colors.primary,
  borderRadius: borders
}

const confirm = {
  fg: colors.white,
  bg: colors.confirm,
  border: colors.confirm,
  borderRadius: borders
}

const danger = {
  fg: colors.white,
  bg: colors.danger,
  border: colors.danger,
  borderRadius: borders
}

const StyledButton = styled.button`
  letter-spacing: 2px;
  margin: 0 0.4em 0 0.4em;
  padding: 0.8em 1.6em;
  outline: none;
  transition: all ${SPEED} ease-in-out;
  background: ${props => (props.bgcolor && props.bgcolor) || props.theme.bg};
  color: ${props => (props.color && props.color) || props.theme.fg};
  border: 2px solid ${props => (props.borderColor && props.borderColor) || props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    outline: none;
    cursor: pointer;
    transform: scale(1.05);
  }
  &:active {
    outline: none;
    transform: scale(0.975);
  }
  &:disabled, &:disabled+&:hover {
    background: #CCC;
    border: 2px solid #CCC;
    color: #EEE;
    transform: scale(1);
  }
`

type Props = {
  handleClick: any,
  buttonText: string,
  bgcolor?: string,
  color?: string,
  buttonStyle?: string,
  borderColor?: string,
  roundCorners?: string,
  disabled?: string
}

const Button = ({
  handleClick,
  buttonText,
  bgcolor,
  color,
  buttonStyle,
  borderColor,
  roundCorners,
  disabled
}: Props) => (
  <div>
    <ThemeProvider
      theme={() => {
        switch (buttonStyle) {
          case 'whiteGhost':
            return whiteGhost
          case 'blackGhost':
            return blackGhost
          case 'inverted':
            return inverted
          case 'confirm':
            return confirm
          case 'danger':
            return danger
          default:
            return primary
        }
      }}
    >
      <StyledButton
        disabled={disabled}
        onClick={handleClick}
        buttonStyle={buttonStyle}
        roundCorners={roundCorners}
        bgcolor={bgcolor}
        color={color}
        borderColor={borderColor}
      >
        {buttonText}
      </StyledButton>
    </ThemeProvider>
  </div>
)

export default Button
