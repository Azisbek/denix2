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
import AdminPanel from '../../components/admin/admin-panel/AdminPanel'
import ApplicationAdmin from '../../components/admin/application-admin/ApplicationAdmin'
import SignIn from '../../components/form/SignIn'
import SignUp from '../../components/form/SignUp'
import NewsArticles from '../../components/news-articles/NewsArticles'
import AdminPromotion from '../../components/admin/AdminPromotion'
import NewsPage from '../../components/titleNews/NewsPage'
import PromotionPage from '../../components/promotion-page/PromotionPage'
import PromotionItemPage from '../../components/promotion-page/PromotionItemPage'
import AdminProduct from '../../components/admin/admin-product/AdminProduct'
import AdminPromotionProduct from '../../components/admin/admin-promotion/AdminPromotionProduct'
import DeleteNews from '../../components/admin/deleteNews/DeleteNews'

const privateRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/catalog" element={<CatalogPage />} />
         <Route path="/catalog/:id" element={<CardPageIffor />} />
         <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/favorites/:id" element={<CardPageIffor />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/company" element={<AboutCompany />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/order" element={<OrderPage />} />
         <Route path="/personal" element={<PersonalAccount />} />
         <Route path="/news" element={<NewsArticles />} />
         <Route path="/news/:id" element={<NewsPage />} />
         <Route path="*" element={<NotFoundPage />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route path="/promotion" element={<PromotionPage />} />
         <Route path="/promotion/:id" element={<PromotionItemPage />} />

         <Route path="/admin" element={<AdminPanel />} />
         <Route path="/admin/new-product" element={<AddNewProducts />} />
         <Route path="/admin/application" element={<ApplicationAdmin />} />
         <Route path="/admin/new-news" element={<AddNews />} />
         <Route path="/admin/promotion" element={<AdminPromotion />} />

         <Route path="/admin/product" element={<AdminProduct />} />
         <Route
            path="/admin/promotion-product"
            element={<AdminPromotionProduct />}
         />
         <Route path="/admin/delete-news" element={<DeleteNews />} />
      </Routes>
   )
}

export default privateRoute
