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
import NotFoundPage from '../../components/notfoundpage/NotFoundPage'
import AddNews from '../../components/admin/AddNews'
import CardPageIffor from '../../components/card-product/CardPageInffor'

const privateRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/catalog/:id" element={<CardPageIffor />} />
         <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/company" element={<AboutCompany />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/order" element={<OrderPage />} />
         <Route path="/personal" element={<PersonalAccount />} />
         <Route path="/new-product" element={<AddNewProducts />} />
         <Route path="/new-news" element={<AddNews />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}

export default privateRoute
