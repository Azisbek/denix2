import React from 'react'
import MainHeader from '../components/header/MainHeader'

const Layout = ({ children }) => (
   <>
      <MainHeader />
      <main>{children}</main>
   </>
)

export default Layout
