import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import { useCallback } from 'react'
import AuthApi from './API/AuthApi'

export const GlobalContext = createContext()

function DataProvider(props) {
    const [token,setToken] = useState(false)

    const initToken = useCallback(() => {
        const getToken = async () => {
            const accessToken = localStorage.getItem("accessToken") || false
            // token have expiry time so local storage token get expired at next day so we call again the token using axios... thats why here we call token two times from local storage and axios
                if(accessToken){
                    const res = await axios.get(`/api/v1/auth/authToken`)
                    //console.log('auth token =', res.data)
                    setToken(res.data.accessToken)
                 }
        } 
        getToken()
    },[]);

    useEffect(() => {
        initToken()
    },[initToken])  

    const data = {
        token : token,
        useAuth: AuthApi()
    }

  return (
    <GlobalContext.Provider value={data}>
        {
            props.children
        }
    </GlobalContext.Provider>
  )
}

export default DataProvider
