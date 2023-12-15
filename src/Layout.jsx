import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// It will fix the header and footer of the website wherever you change click on something else the header and
// footer will be permanent and this Layout,jsx wil act like a base of the page
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
