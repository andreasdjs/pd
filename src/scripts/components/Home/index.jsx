import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 4em;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.bgcolor && props.bgcolor};
`

const Home = ({ message, value }) => (
  <div>
    <Section bgcolor="#e0e0e0"><h1>{message} {value}</h1></Section>
    <Section bgcolor="#d0d0d0"><h1>{message} {value}</h1></Section>
    <Section bgcolor="#c0c0c0"><h1>{message} {value}</h1></Section>
  </div>
)

export default Home
