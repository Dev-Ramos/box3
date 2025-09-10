import { Navigate } from "react-router-dom"

type PrivateRouteProps = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('token') != null

  return isAuthenticated ? children : <Navigate to='/'/>
}

export default PrivateRoute
