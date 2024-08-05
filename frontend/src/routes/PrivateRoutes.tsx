import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { ProductContextProvider } from '../contexts/ProductContext'

const PrivateRoutes: React.FC = () => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <></>
  }

  return user ? (
    <ProductContextProvider>
      <Outlet />
    </ProductContextProvider>
  ) : (
    <Navigate to="/login" />
  )
}

export default PrivateRoutes
