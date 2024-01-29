import React from 'react'
import Layout from './layout/Layout'
import PrivateRoute from './pages/private/privateRoute'
import NavBar from './components/navbar/NavBar'
// import AddNewProducts from './components/admin/AddNewProducts'

const App = () => (
   <Layout>
      <NavBar />
      <PrivateRoute />
      {/* <AddNewProducts /> */}
   </Layout>
)

export default App
