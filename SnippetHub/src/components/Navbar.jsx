import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg flex gap-6 text-lg font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "underline text-blue-400" : ""}>
            Home
            </NavLink>

        <NavLink to="/pastes" className={({ isActive }) => isActive ? "underline text-blue-400" : ""}>
            Pastes
            </NavLink>
    </nav>
  )
}
