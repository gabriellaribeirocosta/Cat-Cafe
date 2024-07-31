import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import { AuthContextProvider } from "../contexts/AuthContext"
import PublicRoutes from "./PublicRoutes"

const index:React.FC = () => {
  return (
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="/login" element={"insert-page-login"}/>
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={"insert-page-products"}/>
          <Route path="/products" element={"insert-page-products"}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
  )
}

export default index