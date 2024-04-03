import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='py-5' style={{textAlign: 'center'}}>
      <NavLink to='/'>
        <img src='https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif' alt='not-found'/>
      </NavLink>
    </div>
  )
}
