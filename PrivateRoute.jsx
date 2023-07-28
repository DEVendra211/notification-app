import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Cookies from 'js-cookie';

const PrivateRoute = () => {
  const token=Cookies.get('jwtToken')
    const user = token ? true : false;
  return (
    user ? <Outlet/>:<Navigate to="/" />
  )
}

export default PrivateRoute