import React from 'react'
import Layout from './layout/Layout'
import PrivateRoute from './pages/private/privateRoute'

const App = () => (
   <Layout>
      <PrivateRoute />
   </Layout>
)

export default App
