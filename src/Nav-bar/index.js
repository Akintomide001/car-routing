import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const activeStyle = { color: "yellow" }
    const inactiveStyle = { color: "#008080" }
    return (
        <div >
            <nav>
                <ul className="nav-bar">
                    <li><NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
                    <li><NavLink to="/Database" style={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Database</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar