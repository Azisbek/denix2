import React from 'react'
import Layout from './layout/Layout'
import PrivateRoute from './pages/private/privateRoute'
import NavBar from './components/navbar/NavBar'

const App = () => (
   <Layout>
      <NavBar />
      <PrivateRoute />
   </Layout>
)

export default App
