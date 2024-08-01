import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { User } from 'firebase/auth'
import { authService } from '../services/firebase/auth/authService'

interface AuthContextType {
  user: User | null
  setUser: React.Dispatch<SetStateAction<User | null>>
  loading: boolean
  setLoading: React.Dispatch<SetStateAction<boolean>>
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {},
})

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const contextValues = {
    user,
    setUser,
    loading,
    setLoading,
  }

  useEffect(() => {
    const userState = authService.userAuthState((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => userState()
  }, [])

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}
