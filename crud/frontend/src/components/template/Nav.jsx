import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<aside className='menu-area'>
    <nav className="menu">
        <Link to="/">
            Inicio
        </Link>
        <Link to="/users">
            Usuarios
        </Link>
    </nav>
</aside>