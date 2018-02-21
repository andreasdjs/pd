import firebase from 'config/firebase'
import { TOGGLE_MUTE } from '../actionTypes'
import { PLAY_SOUND } from '../actionTypes'
import { RECEIVED_DATA } from '../actionTypes'

export const toggleMuteAction = {
  type: TOGGLE_MUTE
}

export const playSoundAction = {
  type: PLAY_SOUND
}

export const receivedData = data => ({
  type: RECEIVED_DATA,
  payload: data
})

export const triggerFetchAction = dispatch => {
  const db = firebase.firestore()
  const dataRef = db.collection('data')
  console.log('Fetching')

  dataRef.get().then(querySnapshot => {
    let data = []
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        type: doc.data().type
      })
    })
    console.log('Finished fetching.')
    dispatch(receivedData(data))
  })
}
