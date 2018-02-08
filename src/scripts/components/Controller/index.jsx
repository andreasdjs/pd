import React from 'react'
import styled from 'styled-components'
import colors  from '../../../styles/colors'

const StickyHeader = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background: ${props => props.bgcolor && props.bgcolor};
`

const IncreaseButton = styled.button`
  padding: 1em 2em;
  border-radius: 50px;
  color: white;
  background: ${props => (props.bgcolor && props.bgcolor) || colors.primaryColor };
  outline: none;
  border:none;
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${props => (props.bgcolor && props.bgcolor) || colors.primaryColorLight };
    transform: scale(1.075);
  }
  &:active {
    outline: none;
    border: none;
    transform: scale(0.95);
  }
`

const Home = ({ handleClick }) => (
  <div>
    <StickyHeader>
      <IncreaseButton onClick={handleClick}>PUSH ME</IncreaseButton>
    </StickyHeader>
  </div>
)

export default Home
