import { cert, initializeApp } from 'firebase-admin/app'
import credentials from '../../credentials.json' assert {type: 'json'}
import { getAuth } from 'firebase-admin/auth'

const admin = initializeApp({
  credential: cert(credentials),
})

export const auth = getAuth(admin)
