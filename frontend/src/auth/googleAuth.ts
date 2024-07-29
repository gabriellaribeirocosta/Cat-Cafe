import {
  User,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../services/firebaseConf'
import { FirebaseError } from 'firebase/app'

export async function googleAuth(): Promise<User | string> {
  const provider = new GoogleAuthProvider()
  try {
    const { user }: UserCredential = await signInWithPopup(auth, provider)
    return user
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unespected Error`
  }
}
