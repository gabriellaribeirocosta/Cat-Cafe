import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../services/firebaseConf'
import { User, UserCredential } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

export async function signUp(
  email: string,
  password: string,
): Promise<User | string> {
  try {
    const response: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user: User = response.user
    return user
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unespected Error`
  }
}

export async function signIn(
  email: string,
  password: string,
): Promise<User | string> {
  try {
    const response: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const user: User = response.user
    return user
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unespected Error`
  }
}