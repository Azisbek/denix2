import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from '../../components/home/HomePage'
import CatalogPage from '../../components/catalog/CatalogPage'
import FavoritesPage from '../../components/favorites/FavoritesPage'
import CartPage from '../../components/cart/CartPage'
import AboutCompany from '../../components/about-company/AboutCompanyPage'
import Contacts from '../../components/contacts/Сontacts'
import OrderPage from '../../components/order-page/OrderPage'
import PersonalAccount from '../../components/personal-area/PersonalAccount'
import AddNewProducts from '../../components/admin/AddNewProducts'

const privateRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/company" element={<AboutCompany />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/order" element={<OrderPage />} />
         <Route path="/personal" element={<PersonalAccount />} />
         <Route path="new-post" element={<AddNewProducts />} />
         <Route path="*" element={<div>Not found 404</div>} />
      </Routes>
   )
}

export default privateRoute
