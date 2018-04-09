import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../styles/colors'
import Button from 'components/Button'
import Select from 'components/Select'
import SelectContainer from 'containers/SelectContainer'

const loadText = 'LOAD'
const playText = 'PLAY'
// const muteText = 'MUTE'
const stopText = 'KILL'

const SPEED = '160ms'

const StyledButton = styled.button`
  letter-spacing: 2px;
  margin: 0 0.4em 0 0.4em;
  padding: 0.8em 1.6em;
  outline: none;
  border: solid 2px ${colors.black};
  border-radius: 50px;
  /* background: ${colors.primary}; */
  background: transparent;
  color: ${colors.black};
  font-weight: 400;
  cursor: pointer;
  transition: all ${SPEED} ease-in-out;
  &:hover {
    outline: none;
    cursor: pointer;
    transform: scale(1.05);
  }
  &:active {
    outline: none;
    transform: scale(0.975);
  }
`
const SelectWrapper = styled.div`
  margin: 0 calc(0.5em - 2px);
`

const HistoryButton = withRouter(({ history }) => (
  <StyledButton
    type='button'
    onClick={() => {
      history.push('/login')
    }}
  >
    Sign in/out
  </StyledButton>
))

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

const Controller = ({
  full,
  patchNames,
  handleClick,
  handleSelectChange,
  handleToggleMuteClick,
  handlePlaySoundClick,
  handleStopSoundClick,
  handleLoadClick,
  handleMultiClick,
  multiClickButtonText,
  disabled
}) => (
  <div>
    <StickyHeader>
      {/* <SelectContainer
        handleChange={handleSelectChange}
        full={full}
        patchNames={patchNames}
      /> */}
      <SelectWrapper>
        <Select
          handleChange={handleSelectChange}
          full={full}
          patchNames={patchNames}
        />
      </SelectWrapper>
      <Button
        handleClick={handleLoadClick}
        buttonText={loadText}
        disabled={disabled}
        roundCorners='true'
      />
      <Button
        handleClick={handlePlaySoundClick}
        buttonText={playText}
        disabled={full.play || !full.loaded}
        buttonStyle='blackGhost'
        roundCorners='true'
      />
      <Button
        handleClick={handleStopSoundClick}
        buttonText={stopText}
        disabled={!full.play}
        buttonStyle='blackGhost'
        roundCorners='true'
      />
      <Button
        handleClick={handleMultiClick}
        buttonText={multiClickButtonText}
        disabled={!full.play}
        buttonStyle='blackGhost'
        roundCorners='true'
      />
      {/* <Button
        handleClick={handleToggleMuteClick}
        buttonText={muteText}
        disabled={disabled}
        buttonStyle='blackGhost'
        roundCorners='true'
      /> */}
      <HistoryButton />
    </StickyHeader>
  </div>
)

export default Controller
