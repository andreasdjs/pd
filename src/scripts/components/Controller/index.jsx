import React from 'react'
import Button from 'components/Button'
import styled from 'styled-components'
import colors from '../../../styles/colors'

const buttonText = 'PUSH'

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

const Home = ({ handleClick }) => (
  <div>
    <StickyHeader>
      <Button
        handleClick={handleClick}
        buttonText={buttonText}
      />
      <Button
        handleClick={handleClick}
        buttonStyle='blackGhost'
        buttonText={buttonText}
        roundCorners='true'
      />
      <Button
        handleClick={handleClick}
        buttonStyle='whiteGhost'
        buttonText={buttonText}
      />
      <Button
        handleClick={handleClick}
        buttonStyle='inverted'
        buttonText={buttonText}
      />
      {/* <Button
        handleClick={handleClick}
        buttonStyle='confirm'
        buttonText={buttonText}
        roundCorners='true'
      />
      <Button
        handleClick={handleClick}
        buttonStyle='danger'
        buttonText={buttonText}
        roundCorners='true'
      />
      <Button
        handleClick={handleClick}
        buttonStyle='danger'
        buttonText={buttonText}
        bgcolor={colors.green}
        color='black'
        borderColor='black'
      /> */}
    </StickyHeader>
  </div>
)

export default Home
