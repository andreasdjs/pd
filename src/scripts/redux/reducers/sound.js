import { TOGGLE_MUTE, PLAY_SOUND } from '../actionTypes'

const initialState = {
  sound: 1,
  play: 0
}

const sound = (state = initialState, action) => {
  const sound = state.sound
  switch (action.type) {
    case TOGGLE_MUTE:
      return {
        ...state,
        sound: sound ? 0 : 1
      }
    case PLAY_SOUND:
      return {
        ...state,
        play: 1
      }
    default:
      return state
  }
}

export default sound
