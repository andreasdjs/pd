import firebase from 'config/firebase'
import {
  TOGGLE_MUTE,
  PLAY_SOUND,
  STOP_SOUND,
  LOAD_PATCH,
  PATCH_LOADED,
  SVG_PATCH,
  SELECT_PATCH,
  RECEIVED_DATA
} from '../actionTypes'

export const toggleMuteAction = {
  type: TOGGLE_MUTE
}

export const playSoundAction = {
  type: PLAY_SOUND
}

export const stopSoundAction = {
  type: STOP_SOUND
}

export const loadPatchAction = {
  type: LOAD_PATCH
}

export const patchLoadedAction = patch => ({
  type: PATCH_LOADED,
  payload: patch
})

export const selectChangeAction = patch => ({
  type: SELECT_PATCH,
  payload: patch
})

export const SVGPatchAction = SVG => ({
  type: SVG_PATCH,
  payload: SVG
})

export const receivedData = data => ({
  type: RECEIVED_DATA,
  payload: data
})

export const triggerFetchAction = dispatch => {
  const db = firebase.firestore()
  const dataRef = db.collection('data')

  dataRef.get().then(querySnapshot => {
    let data = []
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        type: doc.data().type
      })
    })
    dispatch(receivedData(data))
  })
}
