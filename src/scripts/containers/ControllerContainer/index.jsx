// @flow

import React, { Component } from 'react'
import Controller from 'components/Controller'
import { connect } from 'react-redux'
import {
  toggleMuteAction,
  playSoundAction,
  stopSoundAction,
  triggerFetchAction,
  loadPatchAction,
  SVGPatchAction,
  selectChangeAction,
  patchLoadedAction
} from 'redux/actions/sound'
import data from '../../data'
import patchNames from '../../data/patchNames'

const mapDispatchToProps = dispatch => ({
  toggleMuteClick: () => dispatch(toggleMuteAction),
  loadPatchClick: () => dispatch(loadPatchAction),
  playSoundClick: () => dispatch(playSoundAction),
  stopSoundClick: () => dispatch(stopSoundAction),
  triggerFetchData: () => dispatch(triggerFetchAction),
  patchLoaded: patch => dispatch(patchLoadedAction(patch)),
  SVGPatchLoaded: SVG => dispatch(SVGPatchAction(SVG)),
  selectChange: selectedPatch =>
    dispatch(selectChangeAction(selectedPatch.target.value))
})

type Props = {
  full: any,
  triggerFetchData: any,
  toggleMuteClick: any,
  playSoundClick: any,
  stopSoundClick: any,
  loadPatchClick: any,
  patchLoaded: any,
  SVGPatchLoaded: any,
  selectedPatch: any,
  patch: any,
  selectChange: any,
  change: any,
  load: number,
  play: number,
  stop: number,
  sound: number,
}

class ControllerContainer extends Component<Props> {
  componentDidMount () {
    const { triggerFetchData } = this.props
    triggerFetchData()
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps.full.selectedPatch)
    if (nextProps.load !== this.props.load && nextProps.load !== 0) {
      const { loaded } = this.props.full
      if (loaded) {
        window.Pd.start()
        this.destroyPatch()
        window.Pd.stop()
        this.clearAudioContext()
      }
      this.loadPatch(this.props.full.selectedPatch)
    }

    if (nextProps.sound !== this.props.sound) {
      this.muteSound(nextProps.sound)
    }

    if (nextProps.play !== this.props.play && nextProps.play) {
      this.playSound()
    }

    if (nextProps.stop === 1) {
      const { play } = this.props
      play && this.stopSound()
    }
  }

  loadPatch (selectedPatch) {
    window.$(document).ready(() => {
      let patch = window.Pd.loadPatch(data[selectedPatch])
      this.drawPatchSVG(data[selectedPatch])
      this.renderPatchImage(data[selectedPatch])
      const { patchLoaded } = this.props
      patchLoaded(patch)
      window.Pd.send('sound', [0])
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

  renderPatchImage (patch) {
    let patchImage = window.pdfu.renderSvg(window.pdfu.parse(patch), {
      svgFile: false,
      ratio: 1.5
    })
    const { SVGPatchLoaded } = this.props
    SVGPatchLoaded(patchImage)
  }

  destroyPatch = () => {
    const { patch } = this.props
    window.Pd.destroyPatch(patch)
  }

  clearAudioContext = () => {
    const currentAudioContext = window.Pd.getAudio() // clear current audiocontext
    currentAudioContext.context.close()
  }

  playSound = () => window.Pd.start()

  stopSound = () => {
    this.destroyPatch()
    console.log('Is PD started? ', window.Pd.isStarted())
    window.Pd.stop()
    console.log('Is PD started? ', window.Pd.isStarted())
    window.$('#svg').html('')
    this.clearAudioContext()
  }
  muteSound = toggle => window.Pd.send('sound', [toggle])

  // change = (e: SyntheticInputEvent<HTMLInputElement>) => {
  //   console.log('Select target value: ', e.target.value)
  // }

  render () {
    const {
      full,
      toggleMuteClick,
      playSoundClick,
      loadPatchClick,
      stopSoundClick,
      selectChange
      // change
    } = this.props
    return (
      <div>
        <Controller
          handleMultiClick={
            this.props.play === 1 || window.Pd.isStarted()
              ? toggleMuteClick
              : null
          }
          multiClickButtonText={
            (this.props.play === 1 || window.Pd.isStarted()) &&
              this.props.sound === 0
              ? 'PLAY'
              : 'MUTE'
          }
          handleLoadClick={loadPatchClick}
          handleSelectChange={selectChange}
          // handleSelectChange={this.change}
          handlePlaySoundClick={playSoundClick}
          handleStopSoundClick={stopSoundClick}
          full={full}
          patchNames={patchNames}
          // handleToggleMuteClick={toggleMuteClick}
        />
      </div>
    )
  }
}

ControllerContainer = connect(null, mapDispatchToProps)(ControllerContainer)

export default ControllerContainer
