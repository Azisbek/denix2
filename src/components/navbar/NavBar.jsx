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

      newProduct: useMatch('/new-product'),
      application: useMatch('/application'),
      newNews: useMatch('/new-news'),
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
      linkMatch.newProduct || linkMatch.application || linkMatch.newNews
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
                     <CustomLink to="/new-product">Добавить товар</CustomLink>
                  </li>
               )}
               {linkMatch.newNews && (
                  <li>
                     <CustomLink to="/new-news">Добавить новость</CustomLink>
                  </li>
               )}
               {linkMatch.application && (
                  <li>
                     <CustomLink to="/application">Заявки</CustomLink>
                  </li>
               )}
            </ul>
         </nav>
      )
   )
}

export default NavBar
