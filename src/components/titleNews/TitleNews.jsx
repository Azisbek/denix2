import React from 'react'
import classes from './TitleNews.module.css'
import time from '../../assets/icon/time.png'
import proverka from '../../assets/image/proverka.png'

const TitleNews = ({ news }) => {
   return (
      <section className={classes.container}>
         <h1>{news.title}</h1>
         <div className={classes.box}>
            <div className={classes.boxTime}>
               <img src={time} alt="Time" />
               <span>{news.date}</span>
            </div>
            <div className={classes.boxTags}>
               {news.tags.map((tag) => (
                  <div key={tag.id}>{tag.title}</div>
               ))}
            </div>
         </div>
         <img src={proverka} alt="Img" className={classes.image} />
         <div className={classes.description}>
            <h2>Описание</h2>
            <p>{news.description}</p>
         </div>
         <div className={classes.gallery}>
            {/* {news.gallery.map((img) => (
               <img key={img.id} src={img.image} alt="Gallery" />
            ))} */}
            <img src={proverka} alt="Gallery" />
            <img src={proverka} alt="Gallery" />
            <img src={proverka} alt="Gallery" />
            <img src={proverka} alt="Gallery" />
            <img src={proverka} alt="Gallery" />
            <img src={proverka} alt="Gallery" />
         </div>
         <div className={classes.url}>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
               Перейти к источнику
            </a>
         </div>
      </section>
   )
}

export default TitleNews
