import { User } from 'firebase/auth'
import { signUp } from './signUp'
import { signIn } from './signIn'
import { googleAuth } from './googleAuth'
import { facebookAuth } from './facebookAuth'
import { currentUser } from './currentUser'
import { logout } from './logout'

interface AuthService {
  signUp(email: string, password: string): Promise<User | string>
  signIn(email: string, password: string): Promise<User | string>
  googleAuth(): Promise<User | string>
  facebookAuth(): Promise<User | string>
  currentUser(): User | null | string
  logout(): Promise<void | string>
}

export const authService: AuthService = {
  signUp,
  signIn,
  googleAuth,
  facebookAuth,
  currentUser,
  logout,
}
