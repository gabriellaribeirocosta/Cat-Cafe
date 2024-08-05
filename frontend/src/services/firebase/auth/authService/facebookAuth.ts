import {
  User,
  UserCredential,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'
import { auth } from '../conf/firebaseConf'
import { FirebaseError } from 'firebase/app'

export async function facebookAuth(): Promise<User | string> {
  const provider = new FacebookAuthProvider()
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
