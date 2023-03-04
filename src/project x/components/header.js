import React from 'react'

export function Header() {
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar-header'>
                <ul className='navbar-nav'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Company</a></li>
                    <li><a href='#'>Help</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header