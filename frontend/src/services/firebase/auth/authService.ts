import { User } from 'firebase/auth'
import { signUp } from './authService/signUp'
import { signIn } from './authService/signIn'
import { googleAuth } from './authService/googleAuth'
import { facebookAuth } from './authService/facebookAuth'
import { logout } from './authService/logout'
import { userAuthState } from './authService/userAuthState'
import { Unsubscribe } from 'firebase/auth'
import { userIdToken } from './authService/userIdToken'

interface AuthService {
  signUp(email: string, password: string): Promise<User | string>
  signIn(email: string, password: string): Promise<User | string>
  googleAuth(): Promise<User | string>
  facebookAuth(): Promise<User | string>
  logout(): Promise<void | string>
  userAuthState(callback: (user: User | null) => void): Unsubscribe
  userIdToken(): Promise<string | null>
}

export const authService: AuthService = {
  signUp,
  signIn,
  googleAuth,
  facebookAuth,
  logout,
  userAuthState,
  userIdToken,
}
