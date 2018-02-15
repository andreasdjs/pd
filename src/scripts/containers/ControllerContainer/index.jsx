import React, { Component } from 'react'
import Controller from 'components/Controller'
import { connect } from 'react-redux'
import {
  toggleMuteAction,
  playSoundAction
} from 'redux/actions/sound'

const mapDispatchToProps = dispatch => ({
  toggleMuteClick: () => dispatch(toggleMuteAction),
  playSoundClick: () => dispatch(playSoundAction)
})

class ControllerContainer extends Component {
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
