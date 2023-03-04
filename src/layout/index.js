import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'

function Layout() {
  return (
    <div>
        <div className='page-content'>
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Outlet/>
            </main>
        </div>
    </div>
  )
}

export default Layout