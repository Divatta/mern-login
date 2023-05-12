import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import image from './/image.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'

function Register() {
  const [user,setUser] = useState({
      firstName: "",
      lastName:"",
      email: "",
      mobile: "",
      password: ""
  })

  const readValue = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value})
  }

  const submitHandler = async (e) => {
      e.preventDefault();
      try {
          console.log('new user =', user)
          await axios.post(`/ats/v1/auth/register`, user)
          .then(res => {
              toast.success(res.data.msg)
              navigator(`/`)
              window.location.href= "/"
          }).catch(err => toast.error(err.response.data.msg))
      } catch (err) {
          toast.error(err.message)
      }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 float-center" style={{color:'#52796F'}}>Register</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-2 ms-2 imgshadow">
          
              <img src={image} alt="" height={430} width={430} />
            
        </div>
        <div className="col-lg-6  offset-md-1 colshadow">
          <div className="card">
            <div className="card-body">
              <form autoComplete='off' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                    <label htmlFor="name">First Name</label>
                    <input type="text" name='firstName' id='firstName' className="form-control" onChange={readValue} required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" name='lastName' id='lastName' className="form-control"  onChange={readValue} required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' className="form-control" onChange={readValue}  required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" name='mobile' id='mobile' className="form-control"  onChange={readValue} required />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name='password' id='password' className="form-control" onChange={readValue} required />
                  </div>
                  <div className="form-group mt-2">
                    <input type="submit" value="Register" className="btn btn-outline-success" />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
