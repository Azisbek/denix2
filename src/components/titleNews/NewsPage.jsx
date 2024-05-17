import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TitleNews from './TitleNews'
import NewsSimilar from './NewsSimilar'
import { getNewsItem } from '../../store/newsPageSlice'
import Loading from '../ui/Loading'
import { setUseParams } from '../../store/useParamsSlice'
import useScrollToTop from '../../hooks/useScrollToTop'
import useResetFiliterHome from '../../hooks/useResetFiliterHome'

const NewsPage = () => {
   const dispatch = useDispatch()
   useScrollToTop()
   useResetFiliterHome()
   const { newsItem, isLoading } = useSelector((state) => state.newsItem)
   const { id } = useParams()

   useEffect(() => {
      dispatch(getNewsItem(id))
      dispatch(setUseParams(id))
   }, [dispatch, id])
   return (
      <>
         {isLoading && <Loading />}
         {newsItem && (
            <section>
               <TitleNews news={newsItem} />
               <NewsSimilar />
            </section>
         )}
      </>
   )
}

export default NewsPage
