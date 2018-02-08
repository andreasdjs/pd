import { INCREASE } from '../actionTypes'

const initialState = {
  count: 1
}

const counter = (state = initialState, action) => {
  const count = state.count
  switch (action.type) {
    case INCREASE:
      return { count: count * 2 }
    default:
      return state
  }
}

export default counter
