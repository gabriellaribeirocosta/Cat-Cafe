import { signOut } from 'firebase/auth'
import { auth } from '../conf/firebaseConf'
import { FirebaseError } from 'firebase/app'

export async function logout(): Promise<void | string> {
  try {
    return await signOut(auth)
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unexpected Error: ${error}`
  }
}
