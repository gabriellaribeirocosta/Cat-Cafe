import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../conf/firebaseConf'
import { FirebaseError } from 'firebase/app'

export async function signUp(
  email: string,
  password: string,
): Promise<User | string> {
  try {
    const { user }: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return user
  } catch (error) {
    if (error instanceof FirebaseError) {
      return error.code
    }
    return `Unexpected Error: ${error}`
  }
}
