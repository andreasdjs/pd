// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../../styles/colors'

const SliderLabel = styled.div`
  margin-bottom:20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  background: ${colors.primary};
  outline: none;
  opacity: 0.8;
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
type Props = {
  loaded: number,
}

class TweakingContainer extends Component<Props> {
  // class TweakingContainer extends Component<{}> {
  // tick() {
  //   let randomFreq = Math.floor((Math.random() * 4000) + 1)
  //   window.Pd.send('freq', [randomFreq])
  // }

  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 800)
  // }

  // change = (e: SyntheticInputEvent<HTMLInputElement>) => {
  //   console.log('selct target value: ', e.target.value)
  // }

  handleSliderChange (e: SyntheticInputEvent<HTMLInputElement>) {
    window.Pd.send('freq', [parseInt(e.target.value, 10)])
  }

  render () {
    const { loaded } = this.props
    return (
      <div>
        {loaded === 1 &&
          <div>
            <SliderLabel>Tweak squeaker frequency</SliderLabel>
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
          </div>}
      </div>
    )
  }
}

export default TweakingContainer
