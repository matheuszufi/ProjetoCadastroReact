import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Home from '../home/Home'
import Footer from '../template/Footer'

export default props =>
<div className="app">
    <Logo />
    <Nav />
    <Home />
    <Footer />
</div>