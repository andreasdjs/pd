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
    <Section bgcolor='#eee'><h1>{message} {value}</h1></Section>
    <Section bgcolor='#ddd'><h1>{message} {value}</h1></Section>
    <Section bgcolor='#ccc'><h1>{message} {value}</h1></Section>
    <Section bgcolor='#bbb'><h1>{message} {value}</h1></Section>
    <Section bgcolor='#aaa'><h1>{message} {value}</h1></Section>
  </div>
)

export default Home
