import React from 'react'
import classes from './NewsArticles.module.css'
import NewsAndArticles from '../news-file/NewsAndArticles'
import Button from '../ui/Button'

const NewsArticles = () => {
   return (
      <section className={classes.container}>
         <h1 className={classes.titleMain}>Новости и статьи</h1>
         <div className={classes.block}>
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles />
         </div>
         <div className={classes.lastBtn}>
            <Button>Показать ещё 10 из 32</Button>
         </div>
      </section>
   )
}

export default NewsArticles
