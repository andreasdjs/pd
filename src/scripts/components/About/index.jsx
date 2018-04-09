import React from 'react'
import styled from 'styled-components'
import colors from '../../../styles/colors'
import { Link } from 'react-router-dom'

const Section = styled.section`
  padding: 4em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.bgcolor && props.bgcolor};
`

const Title = styled.h1`
  margin-top: -4rem;
  margin-bottom: 1rem;
  font-size: 4.4em;
  line-height: 1.2em;
  align-self: center;
  text-align: center;
`
const SubTitle = styled.h3`
  font-size: 1.6em;
  align-self: center;
  line-height: 1.4;
  color: ${colors.black};
  text-align: center;
  font-weight: 200;
  max-width: 80%;
`

// const TinyText = styled.p`
//   align-self: center;
//   line-height: 1.618em;
//   font-weight:100;
//   color: ${colors.black};
// `

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  Section > h1 {
    transition: color 120ms ease-in-out;
  }
  Section > h1:hover {
    color: ${colors.primary};
  }
  /* Section > h3 {
    transition: all 120ms ease-in-out;
    padding: 0.4em 0.4em;
  }
  Section > h3:hover {
    background: ${colors.black};
    color: ${colors.white};
  } */
`

const About = ({ sound, play, data }) => (
  <div>
    <StyledLink to='/'>
      <Section bgcolor={colors.white}>
        <Title>PURE DATA</Title>
        <SubTitle>Load, play, control Pure Data patches in real time. Using WebPD by Sebpiq</SubTitle>
      </Section>
    </StyledLink>
  </div>
)

export default About
