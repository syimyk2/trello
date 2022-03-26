import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
  const navigate =useNavigate()
  const location = useLocation()
  const auth = useSelector((state)=>state.auth.isRegister)
  console.log('auth'+ auth);
  if(location.pathname ==='/signup'&& !auth){
    return <Navigate to={'/signup'} state={{from: location}}/>
  }

  if(!auth){
   return <Navigate to={'/login-page'} state={{from: location}}/>
  }
  return (
   children
  )
}

export default RequireAuth
