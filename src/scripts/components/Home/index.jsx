import React from 'react'
import styled from 'styled-components'
import TweakingContainer from 'containers/TweakingContainer'

const Section = styled.section`
  margin-top: 65px; /* bump down under sticky */
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
// const DisplayStatus = styled.div`
//   text-align:center;
//   min-height:90px;
//   margin-top:50px;
// `

function createMarkup (SVG) {
  return { __html: SVG }
}

const Home = ({ load, sound, play, data, full }) => (
  <div>
    <Section bgcolor='#eee'>
      {/* <DisplayStatus> */}
        {/* {data && data.map(item => console.log(item.type))} */}
        {/* {data &&
          data.map((item, index) => <span key={index}>{item.type}</span>)} */}
        {/* {sound === 0 && <h5>MUTE</h5>} */}
        {/* {play === 1 && sound !== 0 && <h5>PLAYING</h5>} */}
      {/* </DisplayStatus> */}
      <TweakingContainer loaded={full.loaded} />
      <SvgImage dangerouslySetInnerHTML={createMarkup(full.SVGPatch)} />
    </Section>
  </div>
)

export default Home
