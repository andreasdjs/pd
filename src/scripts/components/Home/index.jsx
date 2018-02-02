import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4em;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${props => props.bgcolor && props.bgcolor};
`

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Home = ({ message }) => (
  <HomeWrapper>
    <Section bgcolor="#f0f0f0"><h1>{message} 1</h1></Section>
    <Section bgcolor="#e0e0e0"><h1>{message} 2</h1></Section>
    <Section bgcolor="#d0d0d0"><h1>{message} 3</h1></Section>
  </HomeWrapper>
)

export default Home
