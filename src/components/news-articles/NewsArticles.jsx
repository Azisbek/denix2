import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './NewsArticles.module.css'
import NewsAndArticles from './news-file/NewsAndArticles'
import Button from '../ui/Button'
import { getNews } from '../../store/addNewsSlice'
import Loading from '../ui/Loading'
import useScrollToTop from '../../hooks/useScrollToTop'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const NewsArticles = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()
   const { news, isLoading } = useSelector((state) => state.news)

   useEffect(() => {
      dispatch(getNews())
   }, [dispatch])

   return news ? (
      <>
         {isLoading && <Loading />}
         <section className={classes.container}>
            <h1 className={classes.titleMain}>Новости и статьи</h1>
            <div className={classes.block}>
               {news.map((newsItem) => (
                  <NewsAndArticles key={newsItem.id} news={newsItem} />
               ))}
            </div>
            <div className={classes.lastBtn}>
               <Button>Показать ещё 10 из 32</Button>
            </div>
         </section>
      </>
   ) : (
      <h1>Пусто</h1>
   )
}

export default NewsArticles
