import './Logo.css'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default props =>
<aside className='logo'>
    <Link href="/" className='logo'>
        <img src={logo} alto="Logo da empresa"></img>
    </Link>
</aside>