import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

const PublicRoutes: React.FC = () => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <></>
  }

  return user ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes
