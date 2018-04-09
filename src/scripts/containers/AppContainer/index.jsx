import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import HomeContainer from 'containers/HomeContainer'
import About from 'components/About'

import styled from 'styled-components'
import colors from '../../../styles/colors'

const Section = styled.section`
  padding: 4em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${props => props.bgcolor && props.bgcolor};
`

const StyledLink = styled(Link)`
  align-self: center;
  align-items: center;
  color: ${colors.primary};
  font-size: 2em;
  line-height: 1.4em;
  text-decoration: none;
`

const StyledInput = styled.input`
  align-self: center;
  align-items: center;
  max-width: 400px;
  margin: 0.2em 0.4em 0.2em 0.4em;
  padding: 0.8em 1.6em;
  border: solid ${colors.grey} 2px;
  border-radius: 50px;
  font-weight: 100;
  letter-spacing: 0.5px;
  outline: none;
  &::placeholder {
    color: ${colors.lightGrey};
    opacity: 1;
    font-weight: lighter;
  }
`

class AppContainer extends Component {
  render () {
    return (
      <div>
        <Route exact path='/home' component={HomeContainer} />
        <Route
          exact
          path='/'
          render={() => (
            <Section>
              <StyledLink to='/login'>Login</StyledLink>
              <StyledLink to='/about'>About</StyledLink>
              <StyledLink to='/home'>Pure Data</StyledLink>
            </Section>
          )}
        />
        <Route
          exact
          path='/login'
          render={() => (
            <Section>
              <StyledInput
                type='text'
                placeholder='Enter Username'
                name='uname'
                required
              />
              <StyledInput
                type='password'
                placeholder='Enter Password'
                name='psw'
                required
              />
              <StyledLink to='/'>Home</StyledLink>
              <StyledLink to='/home'>Pure Data</StyledLink>
            </Section>
          )}
        />
        <Route exact path='/about' component={About} />
      </div>
    )
  }
}

export default AppContainer
