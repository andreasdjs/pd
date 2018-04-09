import React, { Component } from 'react'
import Home from 'components/Home'
import ControllerContainer from 'containers/ControllerContainer'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  render () {
    const { soundData, load, sound, play, stop, data, patch, full } = this.props

    return (
      <div>
        <ControllerContainer
          full={full}
          load={load}
          sound={sound}
          play={play}
          stop={stop}
          patch={patch}
          soundData={soundData}
        />
        <Home full={full} load={load} data={data} sound={sound} play={play} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  full: state.sound,
  patch: state.sound.patch,
  load: state.sound.load,
  sound: state.sound.sound,
  play: state.sound.play,
  stop: state.sound.stop,
  data: state.data.data
})

HomeContainer = connect(mapStateToProps)(HomeContainer)

export default HomeContainer
