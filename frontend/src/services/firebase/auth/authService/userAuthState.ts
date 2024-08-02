import { onAuthStateChanged, Unsubscribe } from 'firebase/auth'
import { auth } from '../conf/firebaseConf'
import { User } from 'firebase/auth'

export function userAuthState(
  callback: (user: User | null) => void,
): Unsubscribe {
  return onAuthStateChanged(auth, callback)
}
