import React, { Component } from 'react'
import Controller from 'components/Controller'

import { connect } from 'react-redux'
import { increaseAction } from 'redux/actions/counter'

const mapDispatchToProps = dispatch => ({
  onIncreaseClick: () => dispatch(increaseAction)
})

class ControllerContainer extends Component {
  handleClick = () => {
    console.log('clickyclacketticlack')
  }

  render () {
    const { onIncreaseClick } = this.props
    return (
      <div>
        <Controller handleClick={onIncreaseClick} />
        {/* <Controller handleClick={this.handleClick} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.counter.count })

ControllerContainer = connect(mapStateToProps, mapDispatchToProps)(
  ControllerContainer
)

export default ControllerContainer
