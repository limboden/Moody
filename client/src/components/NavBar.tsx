// import React from "react"
import { Link } from 'react-router-dom';

const NavBar = () => {
  // TODO: Add 'Welcome Username' at the end of the navbar if the user is logged in

  return (
    <nav className='d-flex container-fluid justify-content-end align-items-center bg-warning'>
      <Link to="/" className='text-decoration-none me-3'>
        <div className="bg-primary h-75 d-flex align-items-center rounded ps-3 pe-3">
          Home
        </div>
      </Link>
      <Link to="/login" className='text-decoration-none'>
        <div className="bg-primary h-75 d-flex align-items-center rounded ps-3 pe-3">
          Login
        </div>
      </Link>
    </nav>
  )
}

export default NavBar