import { auth } from '../services/firebaseConf'
import { User, Auth } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

export function currentUser(): User | null | string {
  try {
    const { currentUser }: Auth = auth
    return currentUser
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unespected Error`
  }
}
