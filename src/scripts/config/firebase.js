import firebase from 'firebase'
import 'firebase/firestore'
import FIRESTORE_CONFIG from 'config/firestoreConfig'

firebase.initializeApp(FIRESTORE_CONFIG)

export default firebase
