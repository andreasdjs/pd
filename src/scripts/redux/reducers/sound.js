import {
  TOGGLE_MUTE,
  PLAY_SOUND,
  STOP_SOUND,
  SELECT_PATCH,
  SVG_PATCH,
  LOAD_PATCH,
  PATCH_LOADED
} from '../actionTypes'

const DEFAULT_PATCH = 'patch01'

const initialState = {
  patch: {},
  load: 0,
  sound: 1,
  play: 0,
  stop: 0,
  loaded: 0,
  SVGPatch: '',
  selectedPatch: DEFAULT_PATCH
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
    case STOP_SOUND:
      return {
        ...state,
        stop: 1,
        play: 0,
        loaded: 0,
        SVGPatch: ''
      }
    case LOAD_PATCH:
      return {
        ...state,
        stop: 0,
        play: 0,
        load: 1
      }
    case PATCH_LOADED:
      console.log('PATCH LOADED: ', action.payload)
      return {
        ...state,
        patch: action.payload,
        load: 0,
        loaded: 1,
        sound: 1
      }
    case SELECT_PATCH:
      console.log('PATCH SELECTED: ', action.payload)
      return {
        ...state,
        stop: 0,
        selectedPatch: action.payload
      }
    case SVG_PATCH:
      return {
        ...state,
        SVGPatch: action.payload
      }
    default:
      return state
  }
}

export default sound
