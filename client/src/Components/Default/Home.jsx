import React from 'react'
import { NavLink } from  'react-router-dom'

function Home() {
  return (
    <div className="container homeimg mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <h4 className="display-4 text-center"><i>Feel free to elevate your employee experience.</i></h4>
          <p className='mt-5'>Create a great place to work at every stage of growth with all-in-one software from ATS</p>
          <button className='btn btn-outline-success text-light  float-end mt-4 me-5' style={{background:'#52796F'}}>
                <NavLink to={`/recruit/register`} className="nav-link tryfree">Try it Free</NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
