import React, { Component } from 'react'
import Select from 'components/Select'

class SelectContainer extends Component {
  render () {
    const { handleChange, full, patchNames } = this.props
    return (
      <div>
        <Select
          handleChange={handleChange}
          full={full}
          patchNames={patchNames}
        />
      </div>
    )
  }
}

export default SelectContainer
