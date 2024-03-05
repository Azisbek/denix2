import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from '../components/home/HomePage'
import CatalogPage from '../components/catalog/CatalogPage'
import FavoritesPage from '../components/favorites/FavoritesPage'
import CartPage from '../components/cart/CartPage'
import AboutCompany from '../components/about-company/AboutCompanyPage'
import Contacts from '../components/contacts/Сontacts'
import OrderPage from '../components/order-page/OrderPage'
import PersonalAccount from '../components/personal-area/PersonalAccount'
import AddNewProducts from '../components/admin/AddNewProducts'
import NotFoundPage from '../components/notfoundpage/NotFoundPage'
import AddNews from '../components/admin/AddNews'
import CardPageIffor from '../components/card-product/CardPageInffor'
import AdminPanel from '../components/admin/admin-panel/AdminPanel'
import ApplicationAdmin from '../components/admin/application-admin/ApplicationAdmin'
import SignIn from '../components/form/SignIn'
import SignUp from '../components/form/SignUp'
import NewsArticles from '../components/news-articles/NewsArticles'
import AdminPromotion from '../components/admin/AdminPromotion'
import NewsPage from '../components/titleNews/NewsPage'
import PromotionPage from '../components/promotion-page/PromotionPage'
import PromotionItemPage from '../components/promotion-page/PromotionItemPage'
import AdminProduct from '../components/admin/admin-product/AdminProduct'
import AdminPromotionProduct from '../components/admin/admin-promotion/AdminPromotionProduct'
import DeleteNews from '../components/admin/deleteNews/DeleteNews'
import NavBar from '../components/navbar/NavBar'
import PrivateRoute from './private/privateRoute'

const allRoutes = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />

            <Route path="/catalog/:id/*" element={<CardPageIffor />}>
               <Route index element={<h1>Общая информация</h1>} />
               <Route path="information" element={<h1>Общая информация</h1>} />
               <Route
                  path="characteristics"
                  element={<h1>Характеристики</h1>}
               />
               <Route path="guarantee" element={<h1>Гарантия</h1>} />
               <Route path="payment" element={<h1>Оплата</h1>} />
               <Route path="compatibility" element={<h1>Совместимость</h1>} />
               <Route path="reviews" element={<h1>Отзывы</h1>} />
            </Route>

            <Route
               path="/favorites"
               element={
                  <PrivateRoute>
                     <FavoritesPage />
                  </PrivateRoute>
               }
            />
            <Route
               path="/favorites/:id"
               element={
                  <PrivateRoute>
                     <CardPageIffor />
                  </PrivateRoute>
               }
            />
            <Route
               path="/cart"
               element={
                  <PrivateRoute>
                     <CartPage />
                  </PrivateRoute>
               }
            />
            <Route path="/company" element={<AboutCompany />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route
               path="/order"
               element={
                  <PrivateRoute>
                     <OrderPage />
                  </PrivateRoute>
               }
            />
            <Route
               path="/personal"
               element={
                  <PrivateRoute>
                     <PersonalAccount />
                  </PrivateRoute>
               }
            />
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
            <Route path="/admin/new-promotion" element={<AdminPromotion />} />

            <Route path="/admin/products" element={<AdminProduct />} />
            <Route
               path="/admin/promotions"
               element={<AdminPromotionProduct />}
            />
            <Route path="/admin/news" element={<DeleteNews />} />
         </Routes>
      </>
   )
}

export default allRoutes
