import React from 'react'
import { NavLink } from 'react-router-dom'
import { Planet } from '../../components/planets/Planet';

export const Show = () => {
  return (
    <>
      <div className='py-5'>
        <div className='mb-3'>
          <NavLink to='/planets'>Back</NavLink>
        </div>
        <Planet />
      </div>
    </>
  )
}
