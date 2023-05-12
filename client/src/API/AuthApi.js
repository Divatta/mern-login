import React, { useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

function AuthApi() {
    //login status
  const [isLogged, setIsLogged] = useState(false)
  const token = localStorage.getItem("accessToken") || false;

  //user
  const [user,setUser] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isUser, setIsUser] = useState(false)


  const initData = useCallback(() => {
    const getuser =async () =>{
        
        // console.log('Token =', token)
        if(token) {
          const res =await axios.get(`/ats/v1/auth/currentUser`, {
            headers: {
                Authorization: token
            }
        });
        //console.log('current user =', res.data)
        setUser(res.data.user)
        
    }
    }
    getuser()
  },[isLogged,user]) //add dependancy

  useEffect(() => {
    initData()
  },[])

  return {
    isLogged: [isLogged,setIsLogged],
    isAdmin: [isAdmin,setIsAdmin],
    isUser: [isUser, setIsUser],
    user: [user,setUser]
  }
}

export default AuthApi
