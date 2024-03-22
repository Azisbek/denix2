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
import GeneralInformation from '../components/card-product/description/items-description/GeneralInformation'
import CharacteristicsItem from '../components/card-product/description/items-description/CharacteristicsItem'
import Guarantee from '../components/card-product/description/items-description/Guarantee'
import Comments from '../components/card-product/description/items-description/Comments'

const allRoutes = () => {
   return (
      <>
         <NavBar />
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />

            <Route path="/catalog/:id/*" element={<CardPageIffor />}>
               <Route index element={<GeneralInformation />} />
               <Route path="information" element={<GeneralInformation />} />
               <Route
                  path="characteristics"
                  element={<CharacteristicsItem />}
               />
               <Route path="guarantee" element={<Guarantee />} />
               <Route path="payment" element={<h1>Оплата</h1>} />
               <Route path="reviews" element={<Comments />} />
            </Route>
            <Route path="/home/:id" element={<CardPageIffor />}>
               <Route index element={<GeneralInformation />} />
               <Route path="information" element={<GeneralInformation />} />
               <Route
                  path="characteristics"
                  element={<CharacteristicsItem />}
               />
               <Route path="guarantee" element={<Guarantee />} />
               <Route path="payment" element={<h1>Оплата</h1>} />
               <Route path="reviews" element={<Comments />} />
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
               path="/cart/order"
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
            <Route path="/home/news/:id" element={<NewsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/promotion" element={<PromotionPage />} />
            <Route path="/home/promotion" element={<PromotionPage />} />
            <Route path="/promotion/:id" element={<PromotionItemPage />} />
            <Route path="/home/promotion/:id" element={<PromotionItemPage />} />

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
