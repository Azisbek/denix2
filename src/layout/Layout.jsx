import React from 'react'
import MainHeader from '../components/header/MainHeader'
import Footer from '../components/footer/Footer'

const Layout = ({ children }) => (
   <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
   </>
)

export default Layout
