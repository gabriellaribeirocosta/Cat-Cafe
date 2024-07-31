import { Routes, Route, Navigate } from 'react-router-dom'

import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

import StandardLayout from '../layouts/StandardLayout'

const Router = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={'insert-page-login'} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<StandardLayout />}>
          <Route path="/" element={'insert-page-products'} />
          <Route path="/products" element={'insert-page-products'} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
