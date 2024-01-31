import React from 'react'
import Layout from './layout/Layout'
// import PrivateRoute from './pages/private/privateRoute'
import NavBar from './components/navbar/NavBar'
import ApplicationAdmin from './components/admin/application-admin/ApplicationAdmin'
// import AdminPanel from './components/admin/admin-panel/AdminPanel'

const App = () => (
   <Layout>
      <NavBar />
      {/* <PrivateRoute /> */}
      {/* <AdminPanel /> */}
      <ApplicationAdmin />
   </Layout>
)

export default App
