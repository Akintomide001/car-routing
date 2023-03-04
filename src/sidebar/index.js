import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const activeStyle = { color: "yellow" }
  const inactiveStyle = { color: "white" }
  return (
    <div className='sidebar'>
      <ul>
        <li><NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
        <li><NavLink to="/Database/people" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>People</NavLink></li>
        <li><NavLink to="/Database/car-info" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Car Info</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar