import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../../../store/addNewsSlice'
import classes from './NewsHome.module.css'
import NewsAndArticles from '../../news-articles/news-file/NewsAndArticles'
import Button from '../../ui/Button'

const NewsHome = () => {
   const navigete = useNavigate()
   const dispatch = useDispatch()
   const { news } = useSelector((state) => state.news)
   const sliceNews = news.slice(0, 4)
   useEffect(() => {
      dispatch(getNews())
   }, [dispatch])
   const clickCatalogHandler = () => {
      navigete('/home/news')
   }
   return (
      <section className={classes.section}>
         <div className={classes.content}>
            <h2>Новости</h2>
            <div className={classes.cardProducts}>
               {sliceNews.map((newsItem) => {
                  return <NewsAndArticles key={newsItem.id} news={newsItem} />
               })}
            </div>
            <Button onClick={clickCatalogHandler}>
               Посмотреть все новости
            </Button>
         </div>
      </section>
   )
}

export default NewsHome
