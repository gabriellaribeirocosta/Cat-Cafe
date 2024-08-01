import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from '../pages/SignIn'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

import StandardLayout from '../layouts/StandardLayout'
import Products from '../pages/Products'
import Dashboard from '../pages/Dashboard'

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<SignIn/>} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<StandardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
