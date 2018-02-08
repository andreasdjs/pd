import { INCREASE } from '../actionTypes'

const initialState = {
  count: 2
}

const anotherCounter = (state = initialState, action) => {
  const count = state.count
  switch (action.type) {
    case INCREASE:
      return { count: count * count }
    default:
      return state
  }
}

export default anotherCounter
