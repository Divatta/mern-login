import React, { useContext } from 'react'
import aImage from './letter-a.png'
import tImage from './tagged.png'
import sImage from './letter-s.png'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { GlobalContext } from '../../GlobalContext'

function Menu() {
    // const context = useContext(GlobalContext)

    // const [isLogged,setIsLogged] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
    // const [isAdmin,setIsAdmin] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;

//     const navigate = useNavigate()

//     const adminRoute = () => {
//         return(
//             <ul className="navbar-nav">
//                 <li className="nav-item dropdown">
//                     <NavLink to={`/`} className="nav-link dropdown-toggle" data-bs-toggle="dropdown" >
//                         <i className="bi bi-person"></i> Account
//                     </NavLink>
//                     <ul className="dropdown-menu">
//                         <li><NavLink to={`/dashboard`} className="dropdown-item"> Dashboard</NavLink></li>
//                         <li><NavLink to={`/`} onClick={logoutUser} className="dropdown-item">Logout</NavLink></li>
//                     </ul>
//                 </li>
//             </ul>
//         )
//     }

//     const commonRoute = () => {
//         return(
            
//                 <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <NavLink to={`/user/login`} className="nav-link">Login</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={`/user/register`} className="nav-link">Register</NavLink>
//                         </li>
//                     </ul>
            
//         )
//     }

//     //logout
//    const logoutUser = async () => {
//         if(window.confirm(`Are you sure to logout?`)){
//             try {
//                 const res = await axios.get(`/api/v1/auth/logout`)
//                 localStorage.clear()
//                 toast(res.data.msg)
//                 setIsAdmin(false)
//                 setIsLogged(false)
//                 navigate(`/`)
//                 window.location.href = "/"
//             } catch (err) {
//                 toast.warning('Logout terminated.')
//             }
//         }

//     }

  return (
    <nav className="navbar navbar-expand-md navbar-dark ">
        <div className="container">
            <NavLink to={`/`} className="navbar-brand">
                <span className="logo"><img src={aImage} alt="" height={40} width={40} />
                <img src={tImage} alt="" height={20} width={20}/>
                <img src={sImage} alt="" height={20} width={20}/></span>
            </NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id='menu'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={`/`} className="nav-link">Home</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav "style=  {{ textAlign:'end'}} >
                        <li className="nav-item">
                            <NavLink to={`/recruit/login`} className="nav-link ">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/recruit/register`} className="nav-link" >Register</NavLink>
                        </li>
                </ul>    
                {/* {
                    isLogged ? adminRoute() : commonRoute()
                } */}
                
            </div>
        </div>
        
    </nav>
    
  )
}

export default Menu
