import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<aside className='menu-area'>
    <nav className="menu">
        <Link href="/">
            Inicio
        </Link>
        <Link href="/users">
            Usuarios
        </Link>
    </nav>
</aside>