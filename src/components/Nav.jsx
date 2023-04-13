import {Link} from 'react-router-dom'


import React from 'react'

function Nav() {
  return (
    <div className=' container-fluid navbar-light bg-light  d-flex  justify-content-center navbar-expand-lg'>
      <nav className='navbar navbar-expand-lg '>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/GroupedTeamMembers">Equipos</Link>
            </li>
        </ul>
    </nav>

    </div>
  )
}

export default Nav