import React from 'react'

const Select = ({ handleChange, full, patchNames }) => (
  <div>
    <select id='patchNames' onChange={handleChange} value={full.selectedPatch}>
      {patchNames &&
        patchNames.map((patch, index) => (
          <option value={patch} key={index}>{patch}</option>
        ))}
    </select>
  </div>
)

export default Select
