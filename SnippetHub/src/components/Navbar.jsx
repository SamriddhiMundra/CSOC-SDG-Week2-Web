import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <NavLink className='flex flex-row gap-4'>
            Home
            </NavLink>

        <NavLink>
            Pastes
            </NavLink>
    </div>
  )
}
