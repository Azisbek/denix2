import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './DeleteNews.module.css'
import DeleteNewsItem from './DeleteNewsItem'
import Loading from '../../ui/Loading'
import { getNewsInAdmin } from '../../../store/adminNewsSlice'
import useScrollToTop from '../../../hooks/useScrollToTop'
import useResetFiliterHome from '../../../hooks/useResetFiliterHome'

const DeleteNews = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()
   const { adminNews, isLoading } = useSelector((state) => state.adminNews)
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredNews, setFilteredNews] = useState([])

   useEffect(() => {
      dispatch(getNewsInAdmin())
   }, [dispatch])

   useEffect(() => {
      setFilteredNews(
         adminNews.filter(
            (news) =>
               news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               news.date.toLowerCase().includes(searchQuery.toLowerCase())
         )
      )
   }, [adminNews, searchQuery])

   const SearchChangeHandler = (event) => {
      setSearchQuery(event.target.value)
   }
   return (
      <>
         {isLoading && <Loading />}
         <section className={classes.container}>
            <div className={classes.block}>
               <h1>Новости и статьи</h1>
               <div className={classes.search}>
                  <input
                     type="text"
                     placeholder="Введите заголовок новости или дату"
                     value={searchQuery}
                     onChange={SearchChangeHandler}
                  />
               </div>
               <span>Новостей: {filteredNews.length}</span>
               <div className={classes.boxNews}>
                  {filteredNews.map((news) => (
                     <DeleteNewsItem key={news.id} adminNews={news} />
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}

export default DeleteNews
