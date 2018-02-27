// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  margin-bottom:60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  max-width: 500px;
  height: 15px;
  border-radius: 5px;
  background: #bbb;
  outline: none;
  opacity: 0.6;
  -webkit-transition: .2s;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`

class TweakingContainer extends Component<{}> {
  // tick() {
  //   let randomFreq = Math.floor((Math.random() * 4000) + 1)
  //   window.Pd.send('freq', [randomFreq])
  // }

  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 800)
  // }

  handleSliderChange (e: SyntheticInputEvent<HTMLInputElement>) {
    window.Pd.send('freq', [parseInt(e.target.value, 10)])
  }

  render () {
    return (
      <SliderContainer>
        <Slider
          type='range'
          min='20'
          step='20'
          max='8000'
          id='frequency'
          onChange={this.handleSliderChange}
        />
      </SliderContainer>
    )
  }
}

export default TweakingContainer
