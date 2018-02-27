// @flow

import React, { Component } from 'react'
import Controller from 'components/Controller'
import { connect } from 'react-redux'
import {
  toggleMuteAction,
  playSoundAction,
  triggerFetchAction
} from 'redux/actions/sound'

const mapDispatchToProps = dispatch => ({
  toggleMuteClick: () => dispatch(toggleMuteAction),
  playSoundClick: () => dispatch(playSoundAction),
  triggerFetchData: () => dispatch(triggerFetchAction)
})

type Props = {
  triggerFetchData: any,
  toggleMuteClick: any,
  playSoundClick: any,
  play: number,
  sound: number,
}

class ControllerContainer extends Component<Props> {
  componentDidMount () {
    console.log('Did mount, fetching data...')
    const { triggerFetchData } = this.props
    triggerFetchData()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.sound !== this.props.sound) {
      this.muteSound(nextProps.sound)
    }
    if (nextProps.play !== this.props.play) {
      this.playSound()
    }
  }

  playSound = () => window.Pd.start()
  muteSound = toggle => window.Pd.send('sound', [toggle])

  render () {
    const { toggleMuteClick, playSoundClick } = this.props
    return (
      <div>
        <Controller
          handlePlaySoundClick={playSoundClick}
          handleToggleMuteClick={toggleMuteClick}
        />
      </div>
    )
  }
}

ControllerContainer = connect(null, mapDispatchToProps)(ControllerContainer)

export default ControllerContainer
