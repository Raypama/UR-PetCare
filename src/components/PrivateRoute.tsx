// import React from 'react'

// import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import API from "../utils/api";

function PrivateRoute() {
  // const authContext = useContext(AuthContext)
  // const isLogin = authContext?.isLogin    
  // const isLogin = true
  // const { isLogin } = useAuth()
  const [isLogin, setIsLogin] = useState(false)
  const token = localStorage.getItem('token')

    const getUser = async() => {
      if(token){
        try {
          const response = await API.get('/verify-token')
          console.log(response);
          if(response.status === 200){
            setIsLogin(true)
          }
          
        } catch (error) {
            console.log(error);
        }
    }

  }

  useEffect(() => {
    getUser()
  }, [token])

  return isLogin || token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
