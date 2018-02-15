import React from 'react'
import Button from 'components/Button'
import styled from 'styled-components'

const muteText = 'MUTE'
const playText = 'PLAY'

const StickyHeader = styled.section`
  position: fixed;
  top: 0;
  z-index:1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: ${props => props.bgcolor && props.bgcolor};
`

const Home = ({ handleClick, handleToggleMuteClick, handlePlaySoundClick, disabled }) => (
  <div>
    <StickyHeader>
      <Button
        handleClick={handlePlaySoundClick}
        buttonText={playText}
        disabled={disabled}
      />
      <Button
        handleClick={handleToggleMuteClick}
        buttonText={muteText}
        disabled={disabled}
      />
    </StickyHeader>
  </div>
)

export default Home
