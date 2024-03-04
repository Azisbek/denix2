import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import classes from './NavBar.module.css'
import CustomLink from '../ui/CustomLink'
import { setNavBar } from '../../store/navBarSlice'

const NavBar = () => {
   const dispatch = useDispatch()
   const { id } = useSelector((state) => state.params)
   const linkMatch = {
      catalog: useMatch('/catalog'),
      productCardInCatalog: useMatch(`/catalog/${id}`),
      cart: useMatch('/cart'),
      order: useMatch('/order'),
      favorites: useMatch('/favorites'),
      productCardInFavorites: useMatch(`/favorites/${id}`),
      company: useMatch('/company'),
      contacts: useMatch('/contacts'),
      news: useMatch('/news'),
      titleNews: useMatch(`/news/${id}`),

      newProduct: useMatch('/admin/new-product'),
      newNews: useMatch('/admin/new-news'),
      newPromotion: useMatch('/admin/new-promotion'),
      application: useMatch('/admin/application'),
      adminProducts: useMatch('/admin/products'),
      adminPromotions: useMatch('/admin/promotions'),
      adminNews: useMatch('/admin/news'),
   }
   const cartMatch = linkMatch.cart || linkMatch.order
   const catalogMatch = linkMatch.catalog || linkMatch.productCardInCatalog
   const favoritesMatch =
      linkMatch.favorites || linkMatch.productCardInFavorites

   const newsMatch = linkMatch.news || linkMatch.titleNews

   const clientMatch =
      linkMatch.productCardInCatalog ||
      linkMatch.productCardInFavorites ||
      linkMatch.company ||
      linkMatch.contacts ||
      linkMatch.favorites ||
      linkMatch.order ||
      linkMatch.news ||
      cartMatch ||
      catalogMatch ||
      favoritesMatch ||
      newsMatch

   const adminMatch =
      linkMatch.newProduct ||
      linkMatch.application ||
      linkMatch.newNews ||
      linkMatch.newPromotion ||
      linkMatch.adminNews ||
      linkMatch.adminProducts ||
      linkMatch.adminPromotions
   const totalNav = adminMatch || clientMatch

   useEffect(() => {
      dispatch(setNavBar({ clientMatch, adminMatch }))
   }, [dispatch, clientMatch, adminMatch])

   return (
      totalNav && (
         <nav className={classes.navbar} id={adminMatch && classes.bgColor}>
            <ul>
               {clientMatch && (
                  <li>
                     <CustomLink to="/home">Главная</CustomLink>
                  </li>
               )}
               {catalogMatch && (
                  <li>
                     <CustomLink to="/catalog">Каталог</CustomLink>
                  </li>
               )}
               {linkMatch.productCardInCatalog && (
                  <li>
                     <CustomLink to={`/catalog/${id}`}>
                        Карточка товара
                     </CustomLink>
                  </li>
               )}
               {cartMatch && (
                  <li>
                     <CustomLink to="/catalog">Каталог</CustomLink>
                  </li>
               )}
               {cartMatch && (
                  <li>
                     <CustomLink to="/cart">Корзина</CustomLink>
                  </li>
               )}
               {linkMatch.order && (
                  <li>
                     <CustomLink to="/order">Оформление заказа</CustomLink>
                  </li>
               )}
               {favoritesMatch && (
                  <li>
                     <CustomLink to="/favorites">Избранное</CustomLink>
                  </li>
               )}
               {linkMatch.productCardInFavorites && (
                  <li>
                     <CustomLink to={`/favorites/${id}`}>
                        Карточка товара
                     </CustomLink>
                  </li>
               )}
               {linkMatch.company && (
                  <li>
                     <CustomLink to="/company">О компании</CustomLink>
                  </li>
               )}
               {linkMatch.contacts && (
                  <li>
                     <CustomLink to="/contacts">
                        Контактная информация
                     </CustomLink>
                  </li>
               )}
               {newsMatch && (
                  <li>
                     <CustomLink to="/news">Статьи и новости</CustomLink>
                  </li>
               )}
               {linkMatch.titleNews && (
                  <li>
                     <CustomLink to={`/news/${id}`}>
                        Заголовок новости
                     </CustomLink>
                  </li>
               )}

               {/* Навигация для админки */}
               {adminMatch && (
                  <li>
                     <CustomLink to="/admin">Админка</CustomLink>
                  </li>
               )}
               {linkMatch.newProduct && (
                  <li>
                     <CustomLink to="/admin/new-product">
                        Добавить товар
                     </CustomLink>
                  </li>
               )}
               {linkMatch.newNews && (
                  <li>
                     <CustomLink to="/admin/new-news">
                        Добавить новость
                     </CustomLink>
                  </li>
               )}
               {linkMatch.newPromotion && (
                  <li>
                     <CustomLink to="/admin/new-promotion">
                        Добавить акций
                     </CustomLink>
                  </li>
               )}
               {linkMatch.application && (
                  <li>
                     <CustomLink to="/admin/application">Заявки</CustomLink>
                  </li>
               )}
               {linkMatch.adminProducts && (
                  <li>
                     <CustomLink to="/admin/products">Все товары</CustomLink>
                  </li>
               )}
               {linkMatch.adminNews && (
                  <li>
                     <CustomLink to="/admin/news">Все новости</CustomLink>
                  </li>
               )}
               {linkMatch.adminPromotions && (
                  <li>
                     <CustomLink to="/admin/promotions">Все акции</CustomLink>
                  </li>
               )}
            </ul>
         </nav>
      )
   )
}

export default NavBar
