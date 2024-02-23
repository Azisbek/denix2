import React from 'react'
import { Link } from 'react-router-dom'
import classes from './NewsAndArticles.module.css'
// import chess from '../../assets/image/img.png'
import time from '../../../assets/icon/time.png'
import chess2 from '../../../assets/image/imgadap.png'

const NewsAndArticles = ({ news }) => {
   return (
      <div className={classes.container}>
         <div className={classes.main}>
            <img className={classes.mainFoto} src={news.image} alt="" />
            <img className={classes.mainFoto2} src={chess2} alt="" />
            <Link to={`/news/${news.id}`} className={classes.text}>
               {news.title}
            </Link>
            <div className={classes.tags}>
               {news.tags.map((tag) => (
                  <div key={tag.id} className={classes.receptionBtn}>
                     {tag.title}
                  </div>
               ))}
            </div>
            <div className={classes.timeDate}>
               <img className={classes.timeChess} src={time} alt="" />
               <span>{news.date}</span>
            </div>
         </div>
      </div>
   )
}

export default NewsAndArticles