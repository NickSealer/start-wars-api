import React from 'react'
import logo from '../logo.svg'
import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <a className='navbar-brand'>
              <img src={logo} className='d-inline-block align-text-top App-logo' alt='logo' style={{ width: 35 }} />
              React Star Wars API
            </a>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/planets' className='nav-link'>Planets</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}
