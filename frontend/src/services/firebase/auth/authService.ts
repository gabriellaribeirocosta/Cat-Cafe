import { User } from 'firebase/auth'
import { signUp } from './authService/signUp'
import { signIn } from './authService/signIn'
import { googleAuth } from './authService/googleAuth'
import { facebookAuth } from './authService/facebookAuth'
import { currentUser } from './authService/currentUser'
import { logout } from './authService/logout'
import { userAuthState } from './authService/userAuthState'
import { Unsubscribe } from 'firebase/auth'

interface AuthService {
  signUp(email: string, password: string): Promise<User | string>
  signIn(email: string, password: string): Promise<User | string>
  googleAuth(): Promise<User | string>
  facebookAuth(): Promise<User | string>
  currentUser(): User | null | string
  logout(): Promise<void | string>
  userAuthState(callback: (user: User | null) => void): Unsubscribe
}

export const authService: AuthService = {
  signUp,
  signIn,
  googleAuth,
  facebookAuth,
  currentUser,
  logout,
  userAuthState,
}
