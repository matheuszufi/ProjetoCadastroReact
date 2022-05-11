import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'

import Logo from '../template/Logo'
import Nav from '../template/Nav'

import Footer from '../template/Footer'

export default props =>
<HashRouter>
<div className="app">
    <Logo />
    <Nav />
    <Routes />
    <Footer />
</div>
</HashRouter>
