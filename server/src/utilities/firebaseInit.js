import { initializeApp } from 'firebase/app'
import { getFirestore, CollectionReference, collection, DocumentData } from 'firebase/firestore'
require('dotenv').config()

// Make sure that config is up to date in /.env
export const firebaseApp = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
})

export const firestore = getFirestore()


