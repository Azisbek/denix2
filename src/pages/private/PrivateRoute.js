import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
   const location = useLocation()
   const user = true
   if (!user) {
      return <Navigate to="/sign-up" state={{ from: location.pathname }} />
   }

   return children
}

export default PrivateRoute
