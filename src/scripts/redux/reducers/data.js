import { RECEIVED_DATA } from '../actionTypes'

const initialState = {
  data: []
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_DATA:
    console.log('Data reducer received data')
    console.log('Payload: ', action.payload)
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default data
