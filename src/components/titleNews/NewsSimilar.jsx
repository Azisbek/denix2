import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NewsSimilar.module.css'
// import NewsAndArticles from '../news-articles/news-file/NewsAndArticles'

const NewsSimilar = () => {
   return (
      <section className={classes.container}>
         <h1>Похожие новости</h1>
         <div className={classes.boxNews}>
            {/* <NewsAndArticles />
            <NewsAndArticles />
            <NewsAndArticles /> */}
         </div>
         <Link to="/news">Посмотреть все новости и статьи</Link>
      </section>
   )
}

export default NewsSimilar
