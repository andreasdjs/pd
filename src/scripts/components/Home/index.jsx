import React from 'react'
import styled from 'styled-components'
import TweakingContainer from 'containers/TweakingContainer'

const Section = styled.section`
  padding: 4em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${props => props.bgcolor && props.bgcolor};
`
const SvgImage = styled.div`
  font-size: 12px;
  align-self: center;
  padding-bottom: 40px;
`
const DisplayStatus = styled.div`
  text-align:center;
  min-height:50px;
  margin-top:50px;
`

const Home = ({ sound, play }) => (
  <div>
    <Section bgcolor='#eee'>
      <DisplayStatus>
        { (sound === 0) && <h5>MUTE</h5> }
        { ((play === 1 && sound !== 0) && <h5>PLAYING</h5>) }
      </DisplayStatus>
      <TweakingContainer />
      <SvgImage id="svg" />
    </Section>
  </div>
)

export default Home
