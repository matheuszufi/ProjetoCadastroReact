import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import Logo from '../template/Logo'
import Nav from '../template/Nav'

import Footer from '../template/Footer'

export default props =>
<BrowserRouter>
<div className="app">
    <Logo />
    <Nav />
    <Routes />
    <Footer />
</div>
</BrowserRouter>
