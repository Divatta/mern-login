import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Default/Home'
import Menu from './Header/Menu'
import Pnf from './Default/Pnf'
import Register from './Auth/Register'
import Login from './Auth/Login'

function MainRoute() {
  return(
    <Router>
        <Menu/>
        <ToastContainer autoClose={3000} position={'top-right'}/>
        <Routes>
            <Route path={`/`} element={<Home/>}/>
            <Route path={`/recruit/register`} element={<Register/>}/>
            <Route path={`/recruit/login`} element={<Login/>}/>
            <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </Router>
  )
}

export default MainRoute
