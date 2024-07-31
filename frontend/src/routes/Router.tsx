import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import PrivateRoutes from "./PrivateRoutes"
import { AuthContextProvider } from "../contexts/AuthContext"
import PublicRoutes from "./PublicRoutes"

const index:React.FC = () => {
  return (
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes/>}>
          <Route path="/login" element={<Login/>}/>
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/products" element={"insert-component-products"}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
  )
}

export default index