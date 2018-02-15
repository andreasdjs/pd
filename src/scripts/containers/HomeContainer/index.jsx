import React, { Component } from 'react'
import Home from 'components/Home'
import ControllerContainer from 'containers/ControllerContainer'
import { connect } from 'react-redux'

class HomeContainer extends Component {
  componentDidMount () {
    let patchName = 'seq_phase08.pd'
    let path = '/assets/patches/'

    window.$(document).ready(() => {
      window.$.get(path + patchName, mainStr => {
        window.Pd.loadPatch(mainStr)
        this.drawPatchSVG(mainStr)
      })
    })
  }

  drawPatchSVG (mainStr) {
    window.$('#svg').html(
      window.pdfu.renderSvg(window.pdfu.parse(mainStr), {
        svgFile: false,
        ratio: 1.5
      })
    )
  }

  render () {
    const { sound, play } = this.props

    return (
      <div>
        <ControllerContainer sound={sound} play={play} />
        <Home sound={sound} play={play} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sound: state.sound.sound,
  play: state.sound.play
})

HomeContainer = connect(mapStateToProps)(HomeContainer)

export default HomeContainer
