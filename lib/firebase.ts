"use client"

import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'placeholder-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'placeholder-auth-domain',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'placeholder-project-id',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'placeholder-storage-bucket',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'placeholder-messaging-id',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'placeholder-app-id',
}

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Connect to emulator in development if enabled
if (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true' && process.env.NODE_ENV === 'development') {
  const authEmulatorHost = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST || 'localhost:9099'
  const firestoreEmulatorHost = process.env.NEXT_PUBLIC_FIREBASE_FIRESTORE_EMULATOR_HOST || 'localhost:8080'
  
  connectAuthEmulator(auth, `http://${authEmulatorHost}`)
  connectFirestoreEmulator(db, 
    firestoreEmulatorHost.split(':')[0], 
    Number(firestoreEmulatorHost.split(':')[1])
  )
}

export { app, auth, db }